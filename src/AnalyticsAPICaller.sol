// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

// Using relative paths for typical local development setups (e.g., with remappings in hardhat/foundry)
// If direct URL imports are strictly necessary for your build, adjust these paths.
import "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";

contract AnalyticsAPICaller is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;
    error UnexpectedRequestID(bytes32 requestId);

    event Response(
        bytes32 indexed requestId,
        string character, // TODO: Consider a more descriptive name if 'character' is specific, e.g., cityDataJsonString
        bytes response,
        bytes err
    );

    // TODO: IMPORTANT - CHAINLINK FUNCTIONS CONFIGURATION
    // The router and donID are now set in the constructor.
    // Ensure the deployer provides the CORRECT values for the target network (e.g., Base Sepolia).
    // Incorrect values will lead to failed Chainlink Functions requests.
    // Example for Base Sepolia (VERIFY these with official Chainlink documentation):
    // Router Address: Check Chainlink documentation for Base Sepolia Functions Router
    // DON ID: e.g., bytes32("fun-base-sepolia-1") - Check Chainlink documentation

    address public immutable router;
    string source = // JavaScript source code to be executed by Chainlink Functions
        "const name = args[0];"
        "const apiResponse = await Functions.makeHttpRequest({"
         "url: `https://GeoMarkt-analytics-api-gl5bbi32cq-ts.a.run.app/api/city/code/${name}`" // TODO: Ensure this API endpoint is reliable, secure, and accessible by Chainlink nodes.
        "});"
        "if (apiResponse.error) {"
        "throw Error('Request failed: ' + apiResponse.error);" // Include error message from API if possible
        "}"
        "const { data } = apiResponse;"
        "return Functions.encodeString(JSON.stringify(data));"; // Returns a JSON string

    uint32 public immutable gasLimit = 300000; // Gas limit for the callback
    bytes32 public immutable donID;
    string public character; // Stores the last response as a string.

    constructor(address _router, bytes32 _donID) FunctionsClient(_router) ConfirmedOwner(msg.sender) {
        // Deployer must provide the correct router and DON ID for the target network (e.g., Base Sepolia).
        require(_router != address(0), "AnalyticsAPICaller: Router address cannot be zero.");
        // require(_donID != bytes32(0), "AnalyticsAPICaller: DON ID cannot be zero."); // Optional: DON ID can technically be 0 for some router versions if default is used.
        router = _router;
        donID = _donID;
    }

    // TODO: OWNERSHIP & PERMISSIONS for sendRequest
    // This function is `onlyOwner`. If this AnalyticsAPICaller contract is intended to be a shared instance
    // used by multiple CityIndex contracts, the CityIndex contracts (or their owners/operators) will NOT
    // be able to call this function directly unless this AnalyticsAPICaller contract's ownership is
    // managed accordingly (e.g., ownership transferred to a master contract like CityIndexFactory,
    // or a multi-sig that can authorize calls).
    //
    // ALTERNATIVE: If each CityIndex is meant to have its own dedicated AnalyticsAPICaller,
    // then the CityIndexFactory should deploy this contract for each CityIndex and transfer ownership
    // of the newly deployed AnalyticsAPICaller to the CityIndex or its creator.
    // The current setup of passing an 'analyticsApiCallerAddress' to CityIndex implies a shared model.
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
        if (err.length > 0) {
            s_lastError = err;
            character = ""; // Clear character string on error
        } else {
            s_lastError = ""; // Clear previous error
            character = string(response); // TODO: This assumes response is a valid UTF-8 string. Consider safety if it might not be.
        }
        emit Response(requestId, character, s_lastResponse, s_lastError);
    }

    // TODO: This function returns the entire last response string ('character').
    // Clients (on-chain or off-chain) will likely need to parse this (e.g., if it's JSON) to get specific data points.
    // Consider if specific data parsing functions are needed within this contract for critical on-chain logic,
    // or if this general getter is sufficient for your use case.
    // The 'cityCode' parameter is currently unused as the function returns the globally stored 'character'.
    function getLatestPriceData(string memory cityCode) external view returns (string memory) {
        // This function should ideally parse s_lastResponse to return specific data for the cityCode,
        // or s_lastResponse should be structured to be generally applicable.
        // Currently, it just returns the last successfully fetched 'character' string.
        return character;
    }
}
