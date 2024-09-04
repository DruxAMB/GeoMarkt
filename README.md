
ALl Contracts were deployed on Base
| Contract           | Address         |
|--------------------|-----------------|
| GeoMarktTrading    | 0xbe0311e8B5ae8E0370BF03d52C035A4F054a6956 |
| GeoMarktToken (GMT)| 0x87A7346C49CF630C5D63Bc02d056eA4988c67f01 |
| CityIndex (EPE)    | 0x3Ef64494ffA42114FE9Eda91817aEBE5f54F1a3b |                          
| CityIndexFactory   | 0x9b4C322fD7282e2556915B46ED8C14825666Fbca |
|EPE CITY TOKEN(EPE) | 0xc77c2b7A3bAe71eb3cFC1700F675b34146A9A11C |                         N0te that EPE has 10 billion tokens because EPE is 10 billion  sq feets


# GeoMarkt Project Architecture

## Overview
GeoMarkt is a decentralized platform for trading city-based tokens and leveraging geospatial data in DeFi. The project utilizes Chainlink oracles, implements a stablecoin (GMT), and provides various trading functionalities.

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

This architecture creates a robust ecosystem for geospatial-based DeFi trading, leveraging the stability of GMT and the reliability of Chainlink oracles.