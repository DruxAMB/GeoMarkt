// Define the types for token buys and sells
export interface ITokenBuy {
  amount: string;
  blockNumber: number;
  buyer: string;
  id: string;
  timestamp: number;
}

export interface ITokenSell {
  timestamp: number;
  seller: string;
  id: string;
  blockNumber: number;
  amount: string;
}

// Define the type for a city index
export interface ICityIndex {
  code: string;
  createdAtBlock: number;
  createdAtTimestamp: number;
  id: string;
  name: string;
  owner: string;
  squareFeet: string;
  symbol: string;
  tokenBuys: ITokenBuy[];
  tokenSells: ITokenSell[];
}

// Define the type for city index factories
export interface ICityIndexFactory {
  cityIndexes: ICityIndex[];
}

// Define the main GraphQL query response type
export interface ICityIndexFactoriesData {
  cityIndexFactories: ICityIndexFactory[];
}
