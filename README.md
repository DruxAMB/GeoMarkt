# GeoMarkt

## Welcome to the GeoMarkt platform

## Technologies Used

- **The Graph**: Used for indexing and querying blockchain data efficiently. The Subgraph allows you to fetch detailed cityindex data easily. You can view the subgraph [here](https://api.studio.thegraph.com/query/88691/geomarket/version/latest).
- **OnchainKit**: Build your onchain apps with ready-to-use React components and Typescript utilities. The onchainkit gives you access to coinbase wallet and also allows for gasless fee with paymaster.
- **Base**: The platform is deployed on the Base network, a Layer 2 scaling solution for Ethereum that offers lower transaction costs and faster confirmations. Base was chosen for its scalability, making it ideal for frequent transactions. You can view a sample transaction on Base [here](https://sepolia.basescan.org/tx/0x4012eed063272e6771d62a07162b3eaf35b6f11f130b5cf2163d28dd53f13660).
- ORA Web3js plugings: used for generating customized avaters
- @chainsafe/web3-plugin-chainlink: used for our price page [here](https://github.com/DruxAMB/GeoMarkt/blob/main/frontend/app/price/page.tsx)
- Web3js plugins:
  Web3js zksync: for integrating paymaster
  Fleek: deployed to fleek

<p align="center" width="100%">
  <img src="https://imgur.com/UDE36f8.png" alt="site"/>
</p>

> ## Table of contents

- [Overview](#overview)
- [Core Features Implemented](#core-features-implemented)
- [Technologies](#technologies)
- [GeoMarkt-MVP-Contract-Addresses](#geomarkt-mvp-contract-addresses)
- [Live Link](#live-link)
- [Contributors](#contributors)
- [Contributing to the project](#contributing-to-the-project)

#

> ## Overview

A decentralized platform that allows users to trade city-based tokens. These tokens are tied to the value and growth potential of real-world cities, creating a new way to invest in urban development.

<p align="center" width="100%">
  <img src="https://imgur.com/PP9XuRc.png" alt="site"/>
</p>

#

> ## core-features-implemented

# GeoMarkt Project Architecture

## Key Components

### 1. AnalyticsAPICaller (Chainlink Integration)

- Uses Chainlink to fetch city sizes from an external API
- City sizes are used to create City Indexes

### 2. GMT Token (Stablecoin)

- Heart of the project
- Pegged 1:1 to USD
- Importance:
  - Reduces volatility in the ecosystem
  - Provides a stable medium of exchange for city token trading
  - Facilitates easier valuation of city indexes

### 3. Token Swapping

- Users can swap ETH or USDT for GMT
- 1:1 ratio maintained for USDT and GMT swaps
- Chainlink price feeds ensure accurate ETH/USD conversion

### 4. CityIndex Contract

- Represents tokenized ownership of a particular city
- Users can buy and sell tokens of specific cities

### 5. CityIndexFactory Contract

- Deploys new CityIndex contracts
- Manages the creation of city-based tokens

### 6. GeoMarktTrading Contract

- Enables trading of city index tokens
- Supports leveraged positions and risk management features

## Chainlink Integration

1. API Caller: Fetches city sizes for creating accurate city indexes
2. Price Feeds: Ensures GMT token maintains its 1:1 peg with USD
3. (Potential future use) Automated price updates for city indexes

## USDT on Sepolia Testnet

- Custom USDT deployed for testing purposes
- Facilitates testing of stablecoin interactions

## Architecture Flow

1. Chainlink oracles provide city data and price feeds
2. CityIndexFactory deploys CityIndex contracts based on data
3. Users acquire GMT by swapping ETH or USDT
4. Users trade city tokens via CityIndex contracts
5. GeoMarktTrading enables advanced trading features
6. Chainlink ensures price stability and data accuracy throughout
7. Paymaster integrated to help to support for payment in other tokens

<p align="center" width="100%">
  <img src="https://imgur.com/IV9RuMI.png" alt="site"/>
</p>

#

> ## Technologies

| <b><u>Stack</u></b> | <b><u>Usage</u></b> |
| :------------------ | :------------------ |
| **`Solidity`**      | Smart contract      |
| **`Next JS`**       | Frontend            |

#

> ## geomarkt-mvp-contract-addresses

ALL Contracts were deployed on Base Sepoila.
**Note:** The contract system has been refactored. Please see "Deployment and Configuration Notes" below for updated deployment procedures and requirements.

| Contract           | Address                                      | Notes                                                                  |
| ------------------ | -------------------------------------------- | ---------------------------------------------------------------------- |
| GeoMarktTrading    | 0x79EbcC60E31e9DA03920bF80440C50Ceefa6ef0e | (Verify configuration with latest GMT, Paymaster, etc.)                |
| GeoMarktToken (GMT)| 0x87A7346C49CF630C5D63Bc02d056eA4988c67f01 | (This is your core GMT token)                                          |
| PayMaster          | 0xBd35aE6683Ce69239F79bc857b1C3D555f3C21Db | (Ensure this is your ERC-4337 compatible Paymaster for Base Sepolia) |
| CityIndex (EPE)    | (Now deployed via CityIndexFactory)          | Example instance.                                                      |
| CityIndexFactory   | `0x...YourNewFactoryAddress`                 | (Must be re-deployed with new constructor arguments)                   |
| AnalyticsAPICaller | `0x...YourNewAnalyticsAPICallerAddress`      | (Must be re-deployed with correct Chainlink config for Base Sepolia) |

## Deployment and Configuration Notes

The smart contract system has been updated. Key changes and deployment considerations are noted below:

### 1. `AnalyticsAPICaller.sol` (`src/AnalyticsAPICaller.sol`)

*   **Deployment:** This contract must be deployed first.
*   **Constructor Arguments:**
    *   `_router (address)`: The Chainlink Functions Router address **for the target network (e.g., Base Sepolia)**. *The previous hardcoded value was for Ethereum Mainnet and will not work on Base Sepolia.*
    *   `_donID (bytes32)`: The Chainlink Functions DON ID **for the target network (e.g., Base Sepolia)**. *The previous hardcoded value was for Ethereum Mainnet.*
*   **Ownership:** The deployer becomes the owner. This owner is responsible for funding the Chainlink subscription and managing it.
*   **Permissions:** The `sendRequest` function is `onlyOwner`. If this `AnalyticsAPICaller` instance is intended to be shared by multiple `CityIndex` contracts (which is implied by `CityIndexFactory` taking its address), you must ensure that the entity calling `CityIndex.priceFeed()` (which triggers `AnalyticsAPICaller.sendRequest()`) has the necessary permissions. This might involve:
    *   Transferring ownership of the `AnalyticsAPICaller` to the `CityIndexFactory` or another central contract.
    *   Using a more complex ownership/permission scheme.
    *   Alternatively, consider deploying a new `AnalyticsAPICaller` instance for each `CityIndex` (this would require `CityIndexFactory` to deploy them).

### 2. `CityIndexFactory.sol` (`src/CityIndexFactory.sol`)

*   **Deployment:** Deploy this contract after the `AnalyticsAPICaller` and your `GMTToken`.
*   **Constructor Arguments:**
    *   `_analyticsApiCallerAddress (address)`: The address of your deployed `AnalyticsAPICaller` contract.
    *   `_gmtTokenAddress (address)`: The address of your GMT (GeoMarkt Token) ERC20 contract. This is now required by the factory to pass to new `CityIndex` instances.
    *   `_paymasterAddress (address)`: The address of your ERC-4337 Paymaster contract. This is also now required by the factory. *(Note: Full ERC-4337 integration in `CityIndex.sol` for `buyWithPaymaster`/`sellWithPaymaster` requires further implementation as per TODOs in that contract).*
*   **`createCityIndex` Function:**
    *   This function now requires an additional `_creationFee (uint256)` argument.
    *   It is `payable`. The `msg.value` sent when calling this function must be greater than the `_creationFee`. This `msg.value` is forwarded to the `CityIndex` constructor.

### 3. `CityIndex.sol` (`src/CityIndex.sol`)

*   **Deployment:** Deployed by `CityIndexFactory`.
*   **Paymaster Functionality:** The `buyWithPaymaster` and `sellWithPaymaster` functions currently have placeholder logic. Full ERC-4337 integration is needed. Refer to the `TODO` comments within the contract. You will need a deployed and operational ERC-4337 EntryPoint contract and your Paymaster contract on Base Sepolia.
*   **Chainlink Integration:** Relies on the `AnalyticsAPICaller` address passed by the factory. Ensure this is correctly configured and permissions are handled as noted above.

### Suggested Deployment Order & Example Addresses (Base Sepolia)

Update this section with your actual deployed addresses on Base Sepolia once available.

| Contract                | Placeholder Address / Example                | Notes                                                                                                |
| ----------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Dependencies**        |                                              |                                                                                                      |
| GMT Token (Your ERC20)  | `0x87A7346C49CF630C5D63Bc02d056eA4988c67f01` | (Confirm this is the correct GMT for Base Sepolia)                                     |
| Paymaster (Your ERC-4337) | `0xBd35aE6683Ce69239F79bc857b1C3D555f3C21Db` | (Ensure this is ERC-4337 compatible and configured for Base Sepolia with GMT) |
| EntryPoint (ERC-4337)   | `0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789` | (Official Base Sepolia EntryPoint - Verify)                                          |
| Chainlink Router        | `0x... (Base Sepolia Chainlink Router)`        | (Obtain from Chainlink Docs for Base Sepolia Functions)                                            |
| Chainlink DON ID        | `bytes32(...Base Sepolia DON ID...)`         | (Obtain from Chainlink Docs for Base Sepolia Functions)                                            |
| **Core Contracts**      |                                              |                                                                                                      |
| AnalyticsAPICaller    | `0x... (Your Deployed AnalyticsAPICaller)`   | Deployed with correct Router & DON ID for Base Sepolia.                                              |
| CityIndexFactory        | `0x... (Your Deployed CityIndexFactory)`     | Deployed with AnalyticsAPICaller, GMT, and Paymaster addresses.                                      |
| CityIndex (example EPE) | Deployed via `CityIndexFactory`              |                                                                                                      |
| GeoMarktTrading         | `0x79EbcC60E31e9DA03920bF80440C50Ceefa6ef0e` | (Verify config with new GMT, WETH for Base Sepolia, etc.)                                  |

#

> ## live-link

## Demo Video (Clients POV)

https://github.com/user-attachments/assets/b04349c7-6df4-49f2-adc7-08feafe2b20b

- [Frontend Deployment](https://noisy-raincoat-many.on-fleek.app/)
- [Sub Graph Query](https://api.studio.thegraph.com/query/88691/geomarket/version/latest)
- [Figma design]()
- [Figma slides](<https://www.figma.com/slides/AqcBIpafeN8xBWDjqtHEYB/any-(Copy)?node-id=23-40&node-type=SLIDE&t=Ih3FUIxbnoV10iOm-0>)

> ## Contributors

This Project was created by these awesome dedicated members

<p align="center" width="100%">
  <img src="https://imgur.com/9D7uUj2" alt="team"/>
</p>

#

> ## Contributing to the project

If you find something worth contributing, please fork the repo, make a pull request and add valid and well-reasoned explanations about your changes or comments.

Before adding a pull request, please note:

- This is an open source project.
- Your contributions should be inviting and clear.
- Any additions should be relevant.
- New features should be easy to contribute to.

All **`suggestions`** are welcome!

#

> ##### README Created by `Enebeli Emmanuel` for GeoMarkt
