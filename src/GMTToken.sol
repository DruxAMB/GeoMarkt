// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract GeoMarktStablecoin is ERC20, Ownable, ReentrancyGuard, Pausable {
    AggregatorV3Interface public ethUsdPriceFeed;
    IERC20 public usdtToken;

    uint256 public constant PRICE_PRECISION = 1e18;
    uint256 public constant COLLATERAL_RATIO = 150; // 150% collateralization ratio
    uint256 public constant LIQUIDATION_THRESHOLD = 110; // 110% threshold for liquidation

    struct CollateralInfo {
        uint256 ethAmount;
        uint256 usdtAmount;
    }

    mapping(address => CollateralInfo) public collateralBalances;
    uint256 public totalCollateralUSD;

    event Mint(address indexed user, uint256 amount, uint256 ethCollateral, uint256 usdtCollateral);
    event Burn(address indexed user, uint256 amount, uint256 ethReturned, uint256 usdtReturned);
    event CollateralAdded(address indexed user, uint256 ethAmount, uint256 usdtAmount);
    event CollateralRemoved(address indexed user, uint256 ethAmount, uint256 usdtAmount);
    event Liquidation(address indexed user, uint256 debt, uint256 ethLiquidated, uint256 usdtLiquidated);
    event UsdtExchanged(address indexed user, uint256 amount);

    constructor() 
        ERC20("GeoMarkt Stablecoin", "GMT") 
        Ownable(msg.sender) 
    {
        usdtToken = IERC20(0xef67Ba74396967cbf005396970258FBc577a7f99);
        ethUsdPriceFeed = AggregatorV3Interface(0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1);
    }

    function setEthUsdPriceFeed(address _priceFeed) external onlyOwner {
        ethUsdPriceFeed = AggregatorV3Interface(_priceFeed);
    }

    function getEthUsdPrice() public view returns (uint256) {
        (,int256 price,,,) = ethUsdPriceFeed.latestRoundData();
        require(price > 0, "Invalid ETH price");
        return uint256(price) * 1e10; // Adjust to 18 decimals
    }

    function addCollateral(uint256 usdtAmount) external payable whenNotPaused {// Adding ETH to get GMT token
        require(msg.value > 0 || usdtAmount > 0, "No collateral provided");

        if (msg.value > 0) {
            collateralBalances[msg.sender].ethAmount += msg.value;
            totalCollateralUSD += (msg.value * getEthUsdPrice()) / PRICE_PRECISION;
        }

        if (usdtAmount > 0) {
            require(usdtToken.transferFrom(msg.sender, address(this), usdtAmount), "USDT transfer failed");
            collateralBalances[msg.sender].usdtAmount += usdtAmount;
            totalCollateralUSD += usdtAmount; // USDT is 1:1 with USD
        }

        emit CollateralAdded(msg.sender, msg.value, usdtAmount);
    }

    function removeCollateral(uint256 ethAmount, uint256 usdtAmount) external nonReentrant whenNotPaused {
        CollateralInfo storage userCollateral = collateralBalances[msg.sender];
        require(userCollateral.ethAmount >= ethAmount && userCollateral.usdtAmount >= usdtAmount, "Insufficient collateral");

        uint256 userDebt = balanceOf(msg.sender);
        uint256 collateralValueUSD = getCollateralValue(msg.sender);
        uint256 removedCollateralUSD = (ethAmount * getEthUsdPrice()) / PRICE_PRECISION + usdtAmount;
        uint256 newCollateralValueUSD = collateralValueUSD - removedCollateralUSD;

        require(newCollateralValueUSD >= userDebt * COLLATERAL_RATIO / 100, "Collateral ratio too low");

        if (ethAmount > 0) {
            userCollateral.ethAmount -= ethAmount;
            totalCollateralUSD -= (ethAmount * getEthUsdPrice()) / PRICE_PRECISION;
            payable(msg.sender).transfer(ethAmount);
        }

        if (usdtAmount > 0) {
            userCollateral.usdtAmount -= usdtAmount;
            totalCollateralUSD -= usdtAmount;
            require(usdtToken.transfer(msg.sender, usdtAmount), "USDT transfer failed");
        }

        emit CollateralRemoved(msg.sender, ethAmount, usdtAmount);
    }

    function mint(uint256 amount) external nonReentrant whenNotPaused {
        uint256 collateralValueUSD = getCollateralValue(msg.sender);
        uint256 maxMintAmount = (collateralValueUSD * 100) / COLLATERAL_RATIO;
        require(balanceOf(msg.sender) + amount <= maxMintAmount, "Insufficient collateral for minting");

        _mint(msg.sender, amount);
        emit Mint(msg.sender, amount, collateralBalances[msg.sender].ethAmount, collateralBalances[msg.sender].usdtAmount);
    }

    function burn(uint256 amount) external nonReentrant whenNotPaused {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        
        _burn(msg.sender, amount);

        uint256 collateralValueUSD = getCollateralValue(msg.sender);
        uint256 debtValueUSD = balanceOf(msg.sender);
        uint256 excessCollateralUSD = collateralValueUSD - (debtValueUSD * COLLATERAL_RATIO / 100);

        uint256 ethToReturn = 0;
        uint256 usdtToReturn = 0;

        if (excessCollateralUSD > 0) {
            uint256 ethValue = (collateralBalances[msg.sender].ethAmount * getEthUsdPrice()) / PRICE_PRECISION;
            if (ethValue > 0) {
                ethToReturn = (excessCollateralUSD * collateralBalances[msg.sender].ethAmount) / ethValue;
                collateralBalances[msg.sender].ethAmount -= ethToReturn;
                totalCollateralUSD -= (ethToReturn * getEthUsdPrice()) / PRICE_PRECISION;
                payable(msg.sender).transfer(ethToReturn);
            }

            uint256 usdtValue = collateralBalances[msg.sender].usdtAmount;
            if (usdtValue > 0) {
                usdtToReturn = (excessCollateralUSD * collateralBalances[msg.sender].usdtAmount) / usdtValue;
                collateralBalances[msg.sender].usdtAmount -= usdtToReturn;
                totalCollateralUSD -= usdtToReturn;
                require(usdtToken.transfer(msg.sender, usdtToReturn), "USDT transfer failed");
            }
        }
        
        emit Burn(msg.sender, amount, ethToReturn, usdtToReturn);
    }

    function liquidate(address user) external nonReentrant whenNotPaused {
        uint256 userDebt = balanceOf(user);
        uint256 collateralValueUSD = getCollateralValue(user);
        require(collateralValueUSD < userDebt * LIQUIDATION_THRESHOLD / 100, "User not liquidatable");

        uint256 debtToRepay = userDebt;
        uint256 ethToLiquidate = (debtToRepay * collateralBalances[user].ethAmount) / userDebt;
        uint256 usdtToLiquidate = (debtToRepay * collateralBalances[user].usdtAmount) / userDebt;

        _burn(user, debtToRepay);
        collateralBalances[user].ethAmount -= ethToLiquidate;
        collateralBalances[user].usdtAmount -= usdtToLiquidate;
        totalCollateralUSD -= ((ethToLiquidate * getEthUsdPrice()) / PRICE_PRECISION + usdtToLiquidate);

        payable(msg.sender).transfer(ethToLiquidate);
        require(usdtToken.transfer(msg.sender, usdtToLiquidate), "USDT transfer failed");

        emit Liquidation(user, debtToRepay, ethToLiquidate, usdtToLiquidate);
    }

    function getCollateralValue(address user) public view returns (uint256) {
        CollateralInfo memory userCollateral = collateralBalances[user];
        return (userCollateral.ethAmount * getEthUsdPrice()) / PRICE_PRECISION + userCollateral.usdtAmount;
    }

    function exchangeUsdtForGmt(uint256 amount) external nonReentrant whenNotPaused { // Adding USDT to get GMT token
        require(amount > 0, "Amount must be greater than 0");
        require(usdtToken.transferFrom(msg.sender, address(this), amount), "USDT transfer failed");
        _mint(msg.sender, amount);
        emit UsdtExchanged(msg.sender, amount);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        _checkCollateralization(owner);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        _checkCollateralization(from);
        return true;
    }

    function _checkCollateralization(address user) internal view {
        uint256 userDebt = balanceOf(user);
        if (userDebt > 0) {
            uint256 collateralValueUSD = getCollateralValue(user);
            require(collateralValueUSD >= userDebt * COLLATERAL_RATIO / 100, "Insufficient collateral after transfer");
        }
    }
}