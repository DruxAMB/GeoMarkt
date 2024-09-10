// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

interface IGeoMarktToken {
    function mint(address to, uint256 amount) external;
    function burnFrom(address account, uint256 amount) external;
}

interface IWETH {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
}

contract GeoMarktTrading is Ownable {
    using Counters for Counters.Counter;

    struct Position {
        uint256 positionId;
        uint256 amount;
        bool isLong;
        uint256 leverage;
        uint256 entryPrice;
        uint256 stopLoss;
        uint256 takeProfit;
    }

    struct Prediction {
        uint256 predictionId;
        uint256 amount;
        bool isUpPrediction;
        uint256 targetPrice;
        uint256 expirationTime;
        bool isSettled;
    }

    mapping(address => mapping(address => mapping(uint256 => Position))) public userPositions;
    mapping(address => mapping(address => uint256[])) public userPositionIds;
    mapping(address => mapping(address => mapping(uint256 => Prediction))) public userPredictions;
    mapping(address => mapping(address => uint256[])) public userPredictionIds;
    mapping(address => uint256) public tokenPrices;
    IGeoMarktToken public GeoMarktToken;
    IWETH public WETH; // Wrapped ETH contract

    Counters.Counter private _positionIdCounter;
    Counters.Counter private _predictionIdCounter;

    event PositionOpened(address indexed user, address indexed token, uint256 positionId, uint256 amount, bool isLong, uint256 leverage, uint256 stopLoss, uint256 takeProfit);
    event PositionClosed(address indexed user, address indexed token, uint256 positionId, uint256 amount, bool isLong, uint256 payout);
    event PredictionMade(address indexed user, address indexed token, uint256 predictionId, uint256 amount, bool isUpPrediction, uint256 targetPrice, uint256 expirationTime);
    event PredictionSettled(address indexed user, address indexed token, uint256 predictionId, bool isWinner, uint256 payout);
    event PriceUpdated(address indexed token, uint256 price);

    constructor(address _weth) Ownable(msg.sender) {
        GeoMarktToken = IGeoMarktToken(0x87A7346C49CF630C5D63Bc02d056eA4988c67f01);
        WETH = IWETH(_weth);
    }

    receive() external payable {}

    function updatePrice(address token, uint256 price) external onlyOwner {
        tokenPrices[token] = price;
        emit PriceUpdated(token, price);
    }

    function openPosition(
        address token,
        uint256 amount,
        bool isLong,
        uint256 leverage,
        uint256 stopLoss,
        uint256 takeProfit
    ) external payable {
        require(amount > 0, "Amount must be greater than zero");
        require(leverage >= 1, "Leverage must be at least 1");
        
        if (address(GeoMarktToken) == token) {
            GeoMarktToken.burnFrom(msg.sender, amount);
        } else if (token == address(WETH)) {
            require(msg.value == amount, "Sent ETH must match the amount");
            WETH.deposit{value: amount}();
        } else {
            (bool success,) = msg.sender.call{value:amount}("");
            if(!success){
                revert();
            }
         
        }

        uint256 newPositionId = _positionIdCounter.current();
        _positionIdCounter.increment();

        Position memory newPosition = Position({
            positionId: newPositionId,
            amount: amount * leverage,
            isLong: isLong,
            leverage: leverage,
            entryPrice: tokenPrices[token],
            stopLoss: stopLoss,
            takeProfit: takeProfit
        });

        userPositions[msg.sender][token][newPositionId] = newPosition;
        userPositionIds[msg.sender][token].push(newPositionId);

        emit PositionOpened(msg.sender, token, newPositionId, amount, isLong, leverage, stopLoss, takeProfit);
    }

    function closePosition(address token, uint256 positionId) public {
        require(userPositions[msg.sender][token][positionId].amount > 0, "Position does not exist");
        Position storage position = userPositions[msg.sender][token][positionId];
        
        uint256 payout = calculatePayout(token, position.amount, position.isLong, position.leverage, position.entryPrice);
        
        if (address(GeoMarktToken) == token) {
            GeoMarktToken.mint(msg.sender, payout);
        } else if (token == address(WETH)) {
            WETH.withdraw(payout);
            payable(msg.sender).transfer(payout);
        }else {
            (bool success,) = msg.sender.call{value:payout}("");
            if(!success){
                revert();
            }
        }

        emit PositionClosed(msg.sender, token, positionId, position.amount, position.isLong, payout);
        
        // Remove the position
        delete userPositions[msg.sender][token][positionId];
        removePositionId(msg.sender, token, positionId);
    }

    function removePositionId(address user, address token, uint256 positionId) internal {
        uint256[] storage positionIds = userPositionIds[user][token];
        for (uint256 i = 0; i < positionIds.length; i++) {
            if (positionIds[i] == positionId) {
                positionIds[i] = positionIds[positionIds.length - 1];
                positionIds.pop();
                break;
            }
        }
    }

    function calculatePayout(address token, uint256 amount, bool isLong, uint256 leverage, uint256 entryPrice) public view returns (uint256) {
        uint256 currentPrice = tokenPrices[token];
        int256 priceDifference = int256(currentPrice) - int256(entryPrice);
        
        if (!isLong) {
            priceDifference = -priceDifference;
        }
        
        int256 profit = (priceDifference * int256(amount) * int256(leverage)) / int256(entryPrice);
        
        if (profit + int256(amount) < 0) {
            return 0;
        }
        
        return uint256(int256(amount) + profit);
    }

    function makePrediction(address token, uint256 amount, bool isUpPrediction, uint256 targetPrice, uint256 duration) external payable {
        require(amount > 0, "Amount must be greater than zero");
        require(duration > 0, "Duration must be greater than zero");
        
        if (address(GeoMarktToken) == token) {
            GeoMarktToken.burnFrom(msg.sender, amount);
        } else if (token == address(WETH)) {
            require(msg.value == amount, "Sent ETH must match the amount");
            WETH.deposit{value: amount}();
        } else {
            (bool success,) = msg.sender.call{value:amount}("");
            if(!success){
                revert();
            }
        }

        uint256 newPredictionId = _predictionIdCounter.current();
        _predictionIdCounter.increment();

        uint256 expirationTime = block.timestamp + duration;
        
        Prediction memory newPrediction = Prediction({
            predictionId: newPredictionId,
            amount: amount,
            isUpPrediction: isUpPrediction,
            targetPrice: targetPrice,
            expirationTime: expirationTime,
            isSettled: false
        });

        userPredictions[msg.sender][token][newPredictionId] = newPrediction;

        userPredictionIds[msg.sender][token].push(newPredictionId);

        emit PredictionMade(msg.sender, token, newPredictionId, amount, isUpPrediction, targetPrice, expirationTime);
    }

    function settlePrediction(address token, uint256 predictionId) external {
        require(userPredictions[msg.sender][token][predictionId].amount > 0, "Prediction does not exist");
        Prediction storage prediction = userPredictions[msg.sender][token][predictionId];
        require(!prediction.isSettled, "Prediction already settled");
        require(block.timestamp >= prediction.expirationTime, "Prediction not yet expired");

        uint256 currentPrice = tokenPrices[token];
        bool isWinner = (prediction.isUpPrediction && currentPrice >= prediction.targetPrice) ||
                        (!prediction.isUpPrediction && currentPrice <= prediction.targetPrice);

        uint256 payout = isWinner ? prediction.amount * 2 : 0;

        if (payout > 0) {
            if (address(GeoMarktToken) == token) {
                GeoMarktToken.mint(msg.sender, payout);
            } else if (token == address(WETH)) {
                WETH.withdraw(payout);
                payable(msg.sender).transfer(payout);
            } else {
            (bool success,) = msg.sender.call{value:payout}("");
            if(!success){
                revert();
            }
            }
        }

        emit PredictionSettled(msg.sender, token, predictionId, isWinner, payout);

        prediction.isSettled = true;
    }

    function checkPositions(address user, address token) external {
        uint256[] storage positionIds = userPositionIds[user][token];
        uint256 currentPrice = tokenPrices[token];

        for (uint256 i = 0; i < positionIds.length; i++) {
            Position storage position = userPositions[user][token][positionIds[i]];
            if ((position.isLong && currentPrice <= position.stopLoss) ||
                (!position.isLong && currentPrice >= position.stopLoss) ||
                (position.isLong && currentPrice >= position.takeProfit) ||
                (!position.isLong && currentPrice <= position.takeProfit)) {
                closePosition(token, positionIds[i]);
                i--; // Adjust index after removal
            }
        }
    }

    function getUserPositions(address user, address token) external view returns (Position[] memory) {
        uint256[] storage positionIds = userPositionIds[user][token];
        Position[] memory positions = new Position[](positionIds.length);
        for (uint256 i = 0; i < positionIds.length; i++) {
            positions[i] = userPositions[user][token][positionIds[i]];
        }
        return positions;
    }

    function getUserPredictions(address user, address token) external view returns (Prediction[] memory) {
        uint256[] storage predictionIds = userPredictionIds[user][token];
        Prediction[] memory predictions = new Prediction[](predictionIds.length);
        for (uint256 i = 0; i < predictionIds.length; i++) {
            predictions[i] = userPredictions[user][token][predictionIds[i]];
        }
        return predictions;
    }
}
