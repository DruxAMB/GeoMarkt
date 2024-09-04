// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Interface for the KashebaToken
interface IKashebaToken {
    function mint(address to, uint256 amount) external;
    function burnFrom(address account, uint256 amount) external;
}

contract KashebaTrading is Ownable {
    struct Position {
        uint256 longAmount;
        uint256 shortAmount;
        uint256 leverage;
        uint256 stopLoss;
        uint256 takeProfit;
    }

    mapping(address => mapping(address => Position)) public userPositions;
    mapping(address => uint256) public tokenPrices;
    IKashebaToken public kashebaToken;

    event PositionOpened(address indexed user, address indexed token, uint256 amount, bool isLong, uint256 leverage, uint256 stopLoss, uint256 takeProfit);
    event PositionClosed(address indexed user, address indexed token, uint256 amount, bool isLong);
    event PriceUpdated(address indexed token, uint256 price);

    constructor(address _kashebaTokenAddress) Ownable(msg.sender) {
        kashebaToken = IKashebaToken(_kashebaTokenAddress);
    }

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
    ) external {
        require(amount > 0, "Amount must be greater than zero");
        require(leverage >= 1, "Leverage must be at least 1");
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        Position storage position = userPositions[msg.sender][token];
        if (isLong) {
            position.longAmount += amount * leverage;
        } else {
            position.shortAmount += amount * leverage;
        }
        position.leverage = leverage;
        position.stopLoss = stopLoss;
        position.takeProfit = takeProfit;
        emit PositionOpened(msg.sender, token, amount, isLong, leverage, stopLoss, takeProfit);
    }

    function closePosition(address token, uint256 amount, bool isLong) public {
        require(amount > 0, "Amount must be greater than zero");
        Position storage position = userPositions[msg.sender][token];
        if (isLong) {
            require(position.longAmount >= amount, "Insufficient long position");
            position.longAmount -= amount;
        } else {
            require(position.shortAmount >= amount, "Insufficient short position");
            position.shortAmount -= amount;
        }

        uint256 payout = calculatePayout(token, amount, isLong, position.leverage);
        IERC20(token).transfer(msg.sender, payout);
        emit PositionClosed(msg.sender, token, amount, isLong);
    }

    function calculatePayout(address token, uint256 amount, bool isLong, uint256 leverage) public view returns (uint256) {
        uint256 price = tokenPrices[token];
        uint256 payout;
        if (isLong) {
            payout = amount + (amount * price * leverage / 100);
        } else {
            payout = amount - (amount * price * leverage / 100);
        }
        return payout;
    }

    function checkStopLossAndTakeProfit(address user, address token) external returns (bool positionsClosed) {
        Position storage position = userPositions[user][token];
        uint256 price = tokenPrices[token];
        bool anyPositionsClosed = false;

        if (position.longAmount > 0 && price <= position.stopLoss) {
            closePosition(token, position.longAmount, true);
            anyPositionsClosed = true;
        }
        if (position.shortAmount > 0 && price >= position.takeProfit) {
            closePosition(token, position.shortAmount, false);
            anyPositionsClosed = true;
        }

        return anyPositionsClosed;
    }

    function getPosition(address user, address token) external view returns (uint256 longAmount, uint256 shortAmount, uint256 leverage, uint256 stopLoss, uint256 takeProfit) {
        Position storage position = userPositions[user][token];
        return (position.longAmount, position.shortAmount, position.leverage, position.stopLoss, position.takeProfit);
    }

    // Function to mint KashebaToken
    function mintKashebaToken(address to, uint256 amount) external onlyOwner {
        kashebaToken.mint(to, amount);
    }

    // Function to burn KashebaToken
    function burnKashebaToken(address from, uint256 amount) external onlyOwner {
        kashebaToken.burnFrom(from, amount);
    }
}