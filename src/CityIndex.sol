// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {AnalyticsAPICaller} from "./AnalyticsAPICaller.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

// Interface for the GMT token
interface IGMTToken {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract CityIndex is ERC20, ERC20Pausable, Ownable {
    address immutable analyticsApiCaller;
    string public code;
    string public city;
    IGMTToken public gmtToken;
    uint256 public currentPrice;
    address public paymasterAddress; // Address of the deployed Paymaster

    constructor(
        address _initialOwner,
        string memory _name,
        string memory _code,
        string memory _symbol,
        uint256 _squareFeet,
        address _apiCallerAddress,
        address _gmtTokenAddress,
        address _paymasterAddress // Add paymaster address
    ) ERC20(_name, _symbol) Ownable(msg.sender) {
        city = _name;
        code = _code;
        analyticsApiCaller = _apiCallerAddress;
        gmtToken = IGMTToken(_gmtTokenAddress);
        paymasterAddress = _paymasterAddress; // Set the paymaster address
        currentPrice = 1 ether; // Initial price set to 1 GMT
        _mint(msg.sender, _squareFeet * 10 ** decimals());
    }

    function setCode(string memory _code) external onlyOwner {
        code = _code;
    }

    function priceFeed(uint64 _subscriptionId) public returns (bytes32 requestId) {
        string[] memory args = new string[](1);
        args[0] = code;
        return AnalyticsAPICaller(analyticsApiCaller).sendRequest(_subscriptionId, args);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // Buying using GMT token
    function buyWithGMT(address to, uint256 amount) public {
        uint256 tokenAmount = amount * 10 ** decimals();
        uint256 gmtAmount = tokenAmount * currentPrice / (10 ** decimals());
        require(tokenAmount <= balanceOf(owner()), "Not enough city tokens available");
        require(gmtToken.transferFrom(msg.sender, address(this), gmtAmount), "GMT transfer failed");
        _transfer(owner(), to, tokenAmount);
    }

    // Selling using GMT token
    function sellWithGMT(address from, uint256 amount) public {
        uint256 tokenAmount = amount * 10 ** decimals();
        uint256 gmtAmount = tokenAmount * currentPrice / (10 ** decimals());
        require(tokenAmount <= balanceOf(from), "Not enough tokens");
        require(gmtToken.transfer(from, gmtAmount), "GMT transfer failed");
        _transfer(from, owner(), tokenAmount);
    }

    // Buying using Paymaster
    function buyWithPaymaster(address to, uint256 amount, bytes calldata paymasterParams) public {
        uint256 tokenAmount = amount * 10 ** decimals();
        require(tokenAmount <= balanceOf(owner()), "Not enough city tokens available");
        
        // Interact with the Paymaster to pay for the transaction
        // Assuming the Paymaster has a function to handle this
        (bool success, ) = paymasterAddress.call(
            abi.encodeWithSignature("validateAndPayForPaymasterTransaction(bytes32,bytes32,Transaction)", /* parameters */)
        );
        require(success, "Paymaster transaction failed");

        _transfer(owner(), to, tokenAmount);
    }

    // Selling using Paymaster
    function sellWithPaymaster(address from, uint256 amount, bytes calldata paymasterParams) public {
        uint256 tokenAmount = amount * 10 ** decimals();
        require(tokenAmount <= balanceOf(from), "Not enough tokens");

        (bool success, ) = paymasterAddress.call(
            abi.encodeWithSignature("validateAndPayForPaymasterTransaction(bytes32,bytes32,Transaction)", /* parameters */)
        );
        require(success, "Paymaster transaction failed");

        _transfer(from, owner(), tokenAmount);
    }

    function updatePrice(uint256 newPrice) public onlyOwner {
        currentPrice = newPrice;
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}
