// Define the types for token buys and sells
export interface TokenBuy {
  amount: string;
  blockNumber: number;
  buyer: string;
  id: string;
  timestamp: number;
}

export interface TokenSell {
  timestamp: number;
  seller: string;
  id: string;
  blockNumber: number;
  amount: string;
}

// Define the type for a city index
export interface CityIndex {
  code: string;
  createdAtBlock: number;
  createdAtTimestamp: number;
  id: string;
  name: string;
  owner: string;
  squareFeet: string;
  symbol: string;
  tokenBuys: TokenBuy[];
  tokenSells: TokenSell[];
}

// Define the type for city index factories
export interface CityIndexFactory {
  cityIndexes: CityIndex[];
}

// Define the main GraphQL query response type
export interface CityIndexFactoriesData {
  cityIndexFactories: CityIndexFactory[];
}
