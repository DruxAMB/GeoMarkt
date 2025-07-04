// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./CityIndex.sol"; // Import the actual CityIndex contract
// Note: Ownable is inherited by CityIndex itself. If Factory needs to be Ownable, import "@openzeppelin/contracts/access/Ownable.sol";

contract CityIndexFactory {
    mapping(address => address[]) public ownerToIndices;

    event CityIndexCreated(
        address indexed owner,
        address indexed cityIndexAddress,
        string name,
        string code,
        string symbol,
        uint256 squareFeet,
        uint256 creationFee // Added for event logging
    );

    address public immutable analyticsApiCallerAddress;
    address public gmtTokenAddress; // Address for the GMT Token
    address public paymasterAddress; // Address for the Paymaster

    // TODO: Consider making gmtTokenAddress and paymasterAddress immutable if they are set only once at deployment.
    // If they need to be updatable, add an Ownable pattern to the factory and restrict setters.

    constructor(
        address _analyticsApiCallerAddress,
        address _gmtTokenAddress,
        address _paymasterAddress
    ) {
        require(_analyticsApiCallerAddress != address(0), "Factory: Invalid Analytics API Caller address");
        // Not requiring gmtTokenAddress and paymasterAddress to be non-zero at factory deployment
        // as they might be set later if the factory is made Ownable and has setters.
        // However, CityIndex constructor WILL require valid addresses if those features are used.
        // For now, they are placeholders.
        analyticsApiCallerAddress = _analyticsApiCallerAddress;
        gmtTokenAddress = _gmtTokenAddress;
        paymasterAddress = _paymasterAddress;
    }

    function createCityIndex(
        string memory _name,
        string memory _code,
        string memory _symbol,
        uint256 _squareFeet,
        uint256 _creationFee // Fee required by CityIndex constructor
    ) external payable returns (address) { // Mark as payable
        // The CityIndex constructor is Ownable(msg.sender) which sets the CityIndex owner
        // to the caller of this createCityIndex function.
        // The CityIndex constructor is also payable and has a 'fee' parameter.
        CityIndex newCityIndex = new CityIndex{value: msg.value}( // Forward ETH sent for the fee
            msg.sender, // _initialOwner for CityIndex's Ownable
            _name,
            _code,
            _symbol,
            _squareFeet,
            analyticsApiCallerAddress,
            gmtTokenAddress, // Pass stored GMT token address
            paymasterAddress, // Pass stored Paymaster address
            _creationFee // Pass the fee required by CityIndex constructor
        );

        ownerToIndices[msg.sender].push(address(newCityIndex));

        emit CityIndexCreated(
            msg.sender,
            address(newCityIndex),
            _name,
            _code,
            _symbol,
            _squareFeet,
            _creationFee
        );

        return address(newCityIndex);
    }

    function getIndicesByOwner(
        address _owner
    ) external view returns (address[] memory) {
        return ownerToIndices[_owner];
    }

    // TODO: If gmtTokenAddress or paymasterAddress need to be updated after deployment,
    // implement Ownable for this factory and add setter functions restricted to the owner.
    // Example:
    // function setGmtTokenAddress(address _newGmtTokenAddress) external onlyOwner {
    //     gmtTokenAddress = _newGmtTokenAddress;
    // }
    // function setPaymasterAddress(address _newPaymasterAddress) external onlyOwner {
    //     paymasterAddress = _newPaymasterAddress;
    // }
}
