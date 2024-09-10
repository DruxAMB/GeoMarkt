
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {AnalyticsAPICaller} from "./AnalyticsAPICaller.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

contract CityIndex is ERC20, ERC20Pausable, Ownable {
    address immutable analyticsApiCaller;
    string public code;

    // Events
    event CodeUpdated(string oldCode, string newCode);
    event PriceFeedRequested(uint64 subscriptionId, bytes32 requestId);
    event TokensBought(address buyer, uint256 amount);
    event TokensSold(address seller, uint256 amount);

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
        string memory oldCode = code;
        code = _code;
        emit CodeUpdated(oldCode, _code);
    }

    function priceFeed(uint64 _subscriptionId) public returns (bytes32 requestId) {
        string[] memory args = new string[](1);
        args[0] = code;
        requestId = AnalyticsAPICaller(analyticsApiCaller).sendRequest(_subscriptionId, args);
        emit PriceFeedRequested(_subscriptionId, requestId);
        return requestId;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function buy(address to, uint256 amount) public payable {
        uint256 tokenAmount = amount * 10 ** decimals();
        require(tokenAmount <= balanceOf(owner()), "Not enough city tokens available");
        _transfer(owner(), to, tokenAmount);
        emit TokensBought(to, amount);
    }

    function sell(address from, uint256 amount) public payable {
        uint256 tokenAmount = amount * 10 ** decimals();
        require(tokenAmount <= balanceOf(from), "Not enough tokens");
        require(address(this).balance >= msg.value, "Not enough Ether in contract");
        _transfer(from, owner(), tokenAmount);
        payable(from).transfer(msg.value);
        emit TokensSold(from, amount);
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}

contract CityIndexFactory {
    mapping(address => address[]) public ownerToIndices;

    event CityIndexCreated(
        address indexed owner,
        address indexed cityIndexAddress,
        string name,
        string code,
        string symbol,
        uint256 squareFeet
    );

    address public immutable analyticsApiCallerAddress;

    constructor(address _analyticsApiCallerAddress) {
        analyticsApiCallerAddress = _analyticsApiCallerAddress;
    }

    function createCityIndex(
        string memory _name,
        string memory _code,
        string memory _symbol,
        uint256 _squareFeet
    ) external returns (address) {
        CityIndex newCityIndex = new CityIndex(
            msg.sender,
            _name,
            _code,
            _symbol,
            _squareFeet,
            analyticsApiCallerAddress
        );

        ownerToIndices[msg.sender].push(address(newCityIndex));

        emit CityIndexCreated(
            msg.sender,
            address(newCityIndex),
            _name,
            _code,
            _symbol,
            _squareFeet
        );

        return address(newCityIndex);
    }

    function getIndicesByOwner(address _owner) external view returns (address[] memory) {
        return ownerToIndices[_owner];
    }
}
