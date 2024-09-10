# GeoMarkt

## Welcome to the GeoMarkt platform

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
| **`Next JS`**      | Frontend            |


#
> ## geomarkt-mvp-contract-addresses

ALL Contracts were deployed on Base Sepoila
| Contract           | Address         |
|--------------------|-----------------|
| GeoMarktTrading    | 0x79EbcC60E31e9DA03920bF80440C50Ceefa6ef0e |
| GeoMarktToken (GMT)| 0x87A7346C49CF630C5D63Bc02d056eA4988c67f01 |
| CityIndex (EPE)    | 0x3Ef64494ffA42114FE9Eda91817aEBE5f54F1a3b |                          
| CityIndexFactory   | 0x6030486266f70466B2Af8424aE34F1C237732b5e |
|EPE CITY TOKEN(EPE) | 0xc77c2b7A3bAe71eb3cFC1700F675b34146A9A11C | N0te that EPE has 10 billion tokens because EPE is 10 billion  sq feets
|PayMaster           | 0xBd35aE6683Ce69239F79bc857b1C3D555f3C21Db |  Note: We support GMT token for paymaster now.






# 

> ## live-link

## Demo Video (Clients POV)


https://github.com/user-attachments/assets/b04349c7-6df4-49f2-adc7-08feafe2b20b



- [Frontend Deployment](https://geo-markt-snowy.vercel.app/)
- [Figma design]()
- [Figma slides](https://www.figma.com/slides/AqcBIpafeN8xBWDjqtHEYB/any-(Copy)?node-id=23-40&node-type=SLIDE&t=Ih3FUIxbnoV10iOm-0)


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





