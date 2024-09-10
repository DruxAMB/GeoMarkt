// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

struct Proof {
    bytes32 taskId;
    bytes32 schemaId;
    bytes32 uHash;
    address recipient;
    bytes32 publicFieldsHash;
    address validator;
    bytes allocatorSignature;
    bytes validatorSignature;
}

struct RealEstateIndexInfo {
    string cityName;
    uint256 citySquareFeet;
    uint256 cityGDP;
    string developmentStage;
    uint256 supply;
    string cityIndexSymbol;
    string developmentStageStatus;
    bytes32 documentHash;
}
