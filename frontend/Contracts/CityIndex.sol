// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {AnalyticsAPICaller} from "./AnalyticsAPICaller.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

contract CityIndex is ERC20, ERC20Pausable, Ownable {
    address immutable analyticsApiCaller;
    string public code;

    constructor(
        address _initialOwner,
        string memory _name,
        string memory _code,
        string memory _symbol,
        uint256 _squareFeet,
        address _apiCallerAddress
    ) ERC20(_name, _symbol) Ownable(_initialOwner) {
        code = _code;
        analyticsApiCaller = _apiCallerAddress;
        // Mint tokens to msg.sender. Total token supply will be equal to the total squareFeet of the city
        _mint(msg.sender, _squareFeet * 10 ** decimals());
    }

    function setCode(string memory _code) external onlyOwner {
        code = _code;
    }

    /**
     * @notice Function to request most recent price feed for the city index
     * @param _subscriptionId The ID of the chinlink price feed function subscription
     * @return requestId the request ID which will let the consumer to listen to DecodedResponse event
     */
    function priceFeed(uint64 _subscriptionId) public returns (bytes32 requestId) {
        string[] memory args = new string[](1);
        args[0] = code;
        return AnalyticsAPICaller(analyticsApiCaller).sendRequest(_subscriptionId, args);
    }

    /**
     * Function to pause the contract.
     */
    function pause() public onlyOwner {
        _pause();
    }

    /**
     * Function to unpause the contract.
     */
    function unpause() public onlyOwner {
        _unpause();
    }

    /**
     * Function to buy the tokens
     * @param amount the total number of tokens to buy
     */
    function buy(address to, uint256 amount) public payable {
        uint256 tokenAmount = amount * 10 ** decimals();
        require(tokenAmount <= balanceOf(owner()), "Not enough city tokens available");
        _transfer(owner(), to, tokenAmount);
    }

    /**
     * Function to sell the tokens
     * @param amount the total number of tokens to buy
     */
    function sell(address from, uint256 amount) public payable {
        uint256 tokenAmount = amount * 10 ** decimals();
        require(tokenAmount <= balanceOf(from), "Not enough tokens");
        require(address(this).balance >= msg.value, "Not enough Ether in contract");
        _transfer(from, owner(), tokenAmount);
        payable(from).transfer(msg.value);
    }

    // The following functions are overrides required by Solidity.
    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}