// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {FunctionsClient} from "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";

contract AnalyticsAPICaller is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;
    error UnexpectedRequestID(bytes32 requestId);

    event Response(bytes32 indexed requestId, string character, bytes response, bytes err);

    address public immutable router;
    string source =
        "const name = args[0];"
        "const apiResponse = await Functions.makeHttpRequest({"
         "url: `https://GeoMarkt-analytics-api-gl5bbi32cq-ts.a.run.app/api/city/code/${name}`"
        "});"
        "if (apiResponse.error) {"
        "throw Error('Request failed');"
        "}"
        "const { data } = apiResponse;"
        "return Functions.encodeString(JSON.stringify(data));";

    uint32 public immutable gasLimit = 300000;
    bytes32 public immutable donID;
    string public character;

    constructor( ) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        donID = 0x66756e2d657468657265756d2d6d61696e6e65742d3100000000000000000000;
        router = 0x65Dcc24F8ff9e51F10DCc7Ed1e4e2A61e6E14bd6;
    }

    function sendRequest(uint64 subscriptionId, string[] calldata args) external onlyOwner virtual returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);
        if (args.length > 0) req.setArgs(args);

        s_lastRequestId = _sendRequest(req.encodeCBOR(), subscriptionId, gasLimit, donID);
        return s_lastRequestId;
    }

    function fulfillRequest(bytes32 requestId, bytes memory response, bytes memory err) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId);
        }
        s_lastResponse = response;
        character = string(response);
        s_lastError = err;
        emit Response(requestId, character, s_lastResponse, s_lastError);
    }

    function getLatestPriceData(string memory cityCode) external view returns (string memory) {
        // This function should parse the s_lastResponse to return the latest price data
        return character; // For simplicity, returning the whole response as string
    }
}
