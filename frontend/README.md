
## Kasheba


### Inspiration
The global real estate market is a dynamic and ever-changing landscape, offering immense opportunities for speculation and investment. However, accessing accurate and timely data for informed decision-making is often challenging. We envisioned Kasheba Analytics as a decentralized platform that democratizes access to real estate market data, enabling users to speculate on city index price movements globally. Inspired by the potential of blockchain technology to provide transparency and security, we set out to create a solution that bridges the gap between real-world data and decentralized finance (DeFi).

### What it does
Kasheba Analytics is a decentralized marketplace where users can speculate on real estate market price movements by trading city indexes. The platform aggregates various real estate metrics such as median property growth, rental yields, and demographic indicators, and uses this data to create an index price for each city. Users can trade these indexes, predicting future price movements and potentially profiting from their trades. The data is made accessible on the blockchain, ensuring transparency, security, and on-demand availability.


### How we built it
We built Kasheba Analytics using a combination of blockchain technology, Chainlink oracles, Circle, Graph and web3js. Here's a high-level overview of the process:

#### Data Collection:
 We identified key real estate metrics necessary for creating city indexes, including property prices, rental information, and demographic indicators. For the hackathon, we hardcoded random data to simulate real-world inputs.

#### Analytics API: 
Developed an API to collate and process the collected data, providing a standardized format for the analytics engine.


#### Chainlink Oracles: 
Integrated Chainlink oracles to fetch data from our off-chain analytics API and bring it onto the blockchain securely.
#### Smart Contracts: 
Created smart contracts to handle data requests and store city index prices on the blockchain.
#### Frontend: 
Designed a user-friendly interface for users to view and trade city indexes.

## Why Use Circle?
1. USDC Integration: Circle provides a seamless way to integrate USDC, a stablecoin pegged to the US dollar, into the Kasheba Analytics platform. By using Circle's services, Kasheba can ensure that all transactions on the platform are conducted in a stable, secure, and globally accepted digital currency.
Trusted Infrastructure: Circle offers a reliable and secure infrastructure for handling digital payments, which is essential for a platform like Kasheba that deals with real-time transactions and financial data.
Scalability and Compliance: Circle’s platform is built for scale and regulatory compliance, ensuring that Kasheba can grow and operate within legal frameworks, especially in handling financial transactions.
2. How Did We Implement Circle?
Installation of Circle SDK: We began by installing the Circle SDK using the command:
bash
Copy code
npm install @circleco/headless-server-sdk
Client Creation: We then created a client using the SDK by importing createClient and initializing it with the app token provided by Circle:
javascript
Copy code
import { createClient } from "@circleco/headless-server-sdk";

const client = createClient({
  appToken: "YourAppTokenHere",
});
Transaction Handling: The Circle SDK was integrated into the smart contracts and backend to handle USDC deposits, withdrawals, and transactions securely. This allowed us to process payments and trades using USDC within the Kasheba platform.
Smart Contract Update: The smart contracts were modified to accept USDC as the primary currency for trading city indexes and managing payouts.
3. What Is the Next Plan for the Project?
Enhanced Data Integration: The next step is to integrate real-time and more extensive datasets from various real estate sources to improve the accuracy and relevance of the city indexes.
Platform Scaling: We plan to scale the platform to support more users and cities, potentially expanding beyond real estate to other market sectors.
Additional Payment Methods: Exploring the integration of additional stablecoins or payment options to provide users with more flexibility in funding their accounts and withdrawing earnings.
Security Audits: Conduct thorough security audits to ensure the platform’s robustness against potential vulnerabilities, especially concerning financial transactions.
4. What Technologies Did We Use?
Blockchain: The core platform is built on Ethereum, leveraging smart contracts to handle trades and data storage securely.
Chainlink Oracles: Used to bring off-chain real estate data onto the blockchain, ensuring that the data used for city indexes is accurate and up-to-date.
Circle SDK: Integrated for handling USDC transactions, providing a stable and secure currency option for users.
React & Next.js: The frontend is built using React and Next.js, offering a dynamic and user-friendly interface for interacting with the platform.
Node.js: The backend is powered by Node.js, managing the API interactions, data processing, and smart contract communications.
Solidity: Smart contracts are written in Solidity to manage the logic for trading city indexes and handling payments.

### Challenges we ran into
* Data Integration: Aggregating real estate data from multiple sources and ensuring its accuracy was a complex task.
* Blockchain Integration: Integrating Chainlink oracles with our smart contracts required careful planning and execution to ensure seamless data flow.
* Security: Ensuring the security and integrity of the data on the blockchain was paramount, requiring thorough testing and validation.

### Accomplishments that we're proud of

* Successfully creating a working prototype that demonstrates the concept of a decentralized real estate market speculation platform.
* Integrating Chainlink oracles, theGraph and circles to securely fetch and display real estate data on the blockchain.
* Developing a user-friendly interface that allows users to easily interact with the platform and trade city indexes.
* Building a robust analytics engine capable of processing and analyzing real estate data in real-time.

### What we learned
* The importance of accurate and timely data in creating reliable financial products.
* How to leverage blockchain technology to bring off-chain data onto the blockchain securely.
* The complexities involved in integrating various data sources and ensuring their accuracy and reliability.
* The potential of decentralized finance to create new and innovative financial products and markets.


### What's next for Kasheba
* Real Data Integration: Integrate real-world data sources to replace the hardcoded random data with actual real estate metrics.
* Expand City Coverage: Increase the number of cities covered by the platform, offering users a wider range of investment opportunities.
* Advanced Analytics: Enhance the analytics engine with more sophisticated algorithms to provide deeper insights and more accurate predictions.
* User Engagement: Develop features to improve user engagement, such as educational content, community forums, and investment tools.
* Partnerships: Establish partnerships with real estate data providers, financial institutions, and blockchain projects to expand the platform's capabilities and reach.
* Virtual Real Estate: Explore integration with virtual reality real estate markets, enabling users to trade indexes for virtual worlds like Decentraland and SAND.
* Global Expansion: Work towards extending Kasheba to include country and world indexes, providing a comprehensive platform for global real estate speculation.

# Kasheba Analytics Smart Contracts

The following table provides an overview of the key smart contracts deployed on the Gnosis TestNet blockchain for the Kasheba Analytics platform.

| Contract Name        | Address                                    | Miscellaneous Details          |
|----------------------|--------------------------------------------|---------------------------------|
| AnalyticsAPICaller    | `0xB9A7EDE0054D21D5c2190F231E0510ccF91289f4` | 8721                            |
| CityIndex             | `0xe4dFcD8642913C73b0BC3140130b43aa132d1de9` | INIT token                      |
| KashebaTrading        | `0x74810B7Da228D503bd58e3FdF899a12e4806Caa9` |                                 |

## Description of Contracts

### AnalyticsAPICaller
- **Address:** `0xB9A7EDE0054D21D5c2190F231E0510ccF91289f4`
- **Details:** This contract is responsible for making API calls to the external analytics service and feeding data into the blockchain.



### CityIndex
- **Address:** `0xe4dFcD8642913C73b0BC3140130b43aa132d1de9`
- **Details:** The main contract for managing the index token of a specific city. The `INIT token` indicates that this is the initial token deployed for testing and validation.

### KashebaTrading
- **Address:** `0x74810B7Da228D503bd58e3FdF899a12e4806Caa9`
- **Details:** This contract handles the trading logic, allowing users to speculate on city index price movements within the Kasheba platform.

## Additional Information

- **Network:** GNOSIS  TestNet
- **Tokens:** USDC is used as the primary currency for transactions on the platform.
- **Oracles:** Chainlink is used to fetch off-chain data and provide it to the smart contracts.

Please refer to each contract’s source code for detailed functionality and implementation specifics.
