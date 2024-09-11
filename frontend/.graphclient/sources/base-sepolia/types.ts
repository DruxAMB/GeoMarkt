// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BaseSepoliaTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CityIndex = {
  id: Scalars['ID']['output'];
  owner: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  code: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  squareFeet: Scalars['BigInt']['output'];
  createdAtBlock: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  codeUpdates: Array<CodeUpdate>;
  priceFeedRequests: Array<PriceFeedRequest>;
  tokenBuys: Array<TokenBuy>;
  tokenSells: Array<TokenSell>;
};


export type CityIndexcodeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CodeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CodeUpdate_filter>;
};


export type CityIndexpriceFeedRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceFeedRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceFeedRequest_filter>;
};


export type CityIndextokenBuysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBuy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenBuy_filter>;
};


export type CityIndextokenSellsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSell_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSell_filter>;
};

export type CityIndexCreated = {
  id: Scalars['ID']['output'];
  owner: Scalars['Bytes']['output'];
  cityIndexAddress: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  code: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  squareFeet: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type CityIndexCreated_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cityIndexAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cityIndexAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  cityIndexAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_not?: InputMaybe<Scalars['String']['input']>;
  code_gt?: InputMaybe<Scalars['String']['input']>;
  code_lt?: InputMaybe<Scalars['String']['input']>;
  code_gte?: InputMaybe<Scalars['String']['input']>;
  code_lte?: InputMaybe<Scalars['String']['input']>;
  code_in?: InputMaybe<Array<Scalars['String']['input']>>;
  code_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  code_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  code_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  code_starts_with?: InputMaybe<Scalars['String']['input']>;
  code_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  code_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code_ends_with?: InputMaybe<Scalars['String']['input']>;
  code_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  code_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  squareFeet?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_not?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  squareFeet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CityIndexCreated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CityIndexCreated_filter>>>;
};

export type CityIndexCreated_orderBy =
  | 'id'
  | 'owner'
  | 'cityIndexAddress'
  | 'name'
  | 'code'
  | 'symbol'
  | 'squareFeet'
  | 'blockNumber'
  | 'timestamp';

export type CityIndexFactory = {
  id: Scalars['ID']['output'];
  cityIndexes: Array<CityIndex>;
};


export type CityIndexFactorycityIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndex_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndex_filter>;
};

export type CityIndexFactory_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  cityIndexes?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndexes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndexes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndexes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndexes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndexes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndexes_?: InputMaybe<CityIndex_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CityIndexFactory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CityIndexFactory_filter>>>;
};

export type CityIndexFactory_orderBy =
  | 'id'
  | 'cityIndexes';

export type CityIndex_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_not?: InputMaybe<Scalars['String']['input']>;
  code_gt?: InputMaybe<Scalars['String']['input']>;
  code_lt?: InputMaybe<Scalars['String']['input']>;
  code_gte?: InputMaybe<Scalars['String']['input']>;
  code_lte?: InputMaybe<Scalars['String']['input']>;
  code_in?: InputMaybe<Array<Scalars['String']['input']>>;
  code_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  code_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  code_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  code_starts_with?: InputMaybe<Scalars['String']['input']>;
  code_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  code_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code_ends_with?: InputMaybe<Scalars['String']['input']>;
  code_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  code_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  code_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  squareFeet?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_not?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  squareFeet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  squareFeet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  codeUpdates?: InputMaybe<Array<Scalars['String']['input']>>;
  codeUpdates_not?: InputMaybe<Array<Scalars['String']['input']>>;
  codeUpdates_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  codeUpdates_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  codeUpdates_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  codeUpdates_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  codeUpdates_?: InputMaybe<CodeUpdate_filter>;
  priceFeedRequests?: InputMaybe<Array<Scalars['String']['input']>>;
  priceFeedRequests_not?: InputMaybe<Array<Scalars['String']['input']>>;
  priceFeedRequests_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  priceFeedRequests_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  priceFeedRequests_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  priceFeedRequests_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  priceFeedRequests_?: InputMaybe<PriceFeedRequest_filter>;
  tokenBuys?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBuys_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBuys_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBuys_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBuys_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBuys_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBuys_?: InputMaybe<TokenBuy_filter>;
  tokenSells?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSells_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSells_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSells_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSells_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSells_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSells_?: InputMaybe<TokenSell_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CityIndex_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CityIndex_filter>>>;
};

export type CityIndex_orderBy =
  | 'id'
  | 'owner'
  | 'name'
  | 'code'
  | 'symbol'
  | 'squareFeet'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'codeUpdates'
  | 'priceFeedRequests'
  | 'tokenBuys'
  | 'tokenSells';

export type CodeUpdate = {
  id: Scalars['ID']['output'];
  cityIndex: CityIndex;
  oldCode: Scalars['String']['output'];
  newCode: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type CodeUpdate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  cityIndex?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_?: InputMaybe<CityIndex_filter>;
  oldCode?: InputMaybe<Scalars['String']['input']>;
  oldCode_not?: InputMaybe<Scalars['String']['input']>;
  oldCode_gt?: InputMaybe<Scalars['String']['input']>;
  oldCode_lt?: InputMaybe<Scalars['String']['input']>;
  oldCode_gte?: InputMaybe<Scalars['String']['input']>;
  oldCode_lte?: InputMaybe<Scalars['String']['input']>;
  oldCode_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldCode_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldCode_contains?: InputMaybe<Scalars['String']['input']>;
  oldCode_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldCode_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldCode_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldCode_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldCode_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldCode_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldCode_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldCode_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldCode_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldCode_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newCode?: InputMaybe<Scalars['String']['input']>;
  newCode_not?: InputMaybe<Scalars['String']['input']>;
  newCode_gt?: InputMaybe<Scalars['String']['input']>;
  newCode_lt?: InputMaybe<Scalars['String']['input']>;
  newCode_gte?: InputMaybe<Scalars['String']['input']>;
  newCode_lte?: InputMaybe<Scalars['String']['input']>;
  newCode_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newCode_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newCode_contains?: InputMaybe<Scalars['String']['input']>;
  newCode_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  newCode_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newCode_starts_with?: InputMaybe<Scalars['String']['input']>;
  newCode_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newCode_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newCode_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newCode_ends_with?: InputMaybe<Scalars['String']['input']>;
  newCode_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newCode_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newCode_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CodeUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CodeUpdate_filter>>>;
};

export type CodeUpdate_orderBy =
  | 'id'
  | 'cityIndex'
  | 'cityIndex__id'
  | 'cityIndex__owner'
  | 'cityIndex__name'
  | 'cityIndex__code'
  | 'cityIndex__symbol'
  | 'cityIndex__squareFeet'
  | 'cityIndex__createdAtBlock'
  | 'cityIndex__createdAtTimestamp'
  | 'oldCode'
  | 'newCode'
  | 'blockNumber'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PriceFeedRequest = {
  id: Scalars['ID']['output'];
  cityIndex: CityIndex;
  subscriptionId: Scalars['BigInt']['output'];
  requestId: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type PriceFeedRequest_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  cityIndex?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_?: InputMaybe<CityIndex_filter>;
  subscriptionId?: InputMaybe<Scalars['BigInt']['input']>;
  subscriptionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  subscriptionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subscriptionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subscriptionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subscriptionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subscriptionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subscriptionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceFeedRequest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PriceFeedRequest_filter>>>;
};

export type PriceFeedRequest_orderBy =
  | 'id'
  | 'cityIndex'
  | 'cityIndex__id'
  | 'cityIndex__owner'
  | 'cityIndex__name'
  | 'cityIndex__code'
  | 'cityIndex__symbol'
  | 'cityIndex__squareFeet'
  | 'cityIndex__createdAtBlock'
  | 'cityIndex__createdAtTimestamp'
  | 'subscriptionId'
  | 'requestId'
  | 'blockNumber'
  | 'timestamp';

export type Query = {
  cityIndexFactory?: Maybe<CityIndexFactory>;
  cityIndexFactories: Array<CityIndexFactory>;
  cityIndex?: Maybe<CityIndex>;
  cityIndexes: Array<CityIndex>;
  codeUpdate?: Maybe<CodeUpdate>;
  codeUpdates: Array<CodeUpdate>;
  priceFeedRequest?: Maybe<PriceFeedRequest>;
  priceFeedRequests: Array<PriceFeedRequest>;
  tokenBuy?: Maybe<TokenBuy>;
  tokenBuys: Array<TokenBuy>;
  tokenSell?: Maybe<TokenSell>;
  tokenSells: Array<TokenSell>;
  cityIndexCreated?: Maybe<CityIndexCreated>;
  cityIndexCreateds: Array<CityIndexCreated>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycityIndexFactoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycityIndexFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndexFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndexFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycityIndexArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycityIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndex_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndex_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycodeUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycodeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CodeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CodeUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceFeedRequestArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceFeedRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceFeedRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceFeedRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenBuyArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenBuysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBuy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenBuy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenSellArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenSellsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSell_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSell_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycityIndexCreatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycityIndexCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndexCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndexCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  cityIndexFactory?: Maybe<CityIndexFactory>;
  cityIndexFactories: Array<CityIndexFactory>;
  cityIndex?: Maybe<CityIndex>;
  cityIndexes: Array<CityIndex>;
  codeUpdate?: Maybe<CodeUpdate>;
  codeUpdates: Array<CodeUpdate>;
  priceFeedRequest?: Maybe<PriceFeedRequest>;
  priceFeedRequests: Array<PriceFeedRequest>;
  tokenBuy?: Maybe<TokenBuy>;
  tokenBuys: Array<TokenBuy>;
  tokenSell?: Maybe<TokenSell>;
  tokenSells: Array<TokenSell>;
  cityIndexCreated?: Maybe<CityIndexCreated>;
  cityIndexCreateds: Array<CityIndexCreated>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncityIndexFactoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncityIndexFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndexFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndexFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncityIndexArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncityIndexesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndex_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndex_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncodeUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncodeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CodeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CodeUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceFeedRequestArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceFeedRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceFeedRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceFeedRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenBuyArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenBuysArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBuy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenBuy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenSellArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenSellsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSell_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSell_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncityIndexCreatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncityIndexCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CityIndexCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CityIndexCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TokenBuy = {
  id: Scalars['ID']['output'];
  cityIndex: CityIndex;
  buyer: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type TokenBuy_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  cityIndex?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_?: InputMaybe<CityIndex_filter>;
  buyer?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenBuy_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenBuy_filter>>>;
};

export type TokenBuy_orderBy =
  | 'id'
  | 'cityIndex'
  | 'cityIndex__id'
  | 'cityIndex__owner'
  | 'cityIndex__name'
  | 'cityIndex__code'
  | 'cityIndex__symbol'
  | 'cityIndex__squareFeet'
  | 'cityIndex__createdAtBlock'
  | 'cityIndex__createdAtTimestamp'
  | 'buyer'
  | 'amount'
  | 'blockNumber'
  | 'timestamp';

export type TokenSell = {
  id: Scalars['ID']['output'];
  cityIndex: CityIndex;
  seller: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type TokenSell_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  cityIndex?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lt?: InputMaybe<Scalars['String']['input']>;
  cityIndex_gte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_lte?: InputMaybe<Scalars['String']['input']>;
  cityIndex_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cityIndex_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cityIndex_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cityIndex_?: InputMaybe<CityIndex_filter>;
  seller?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenSell_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenSell_filter>>>;
};

export type TokenSell_orderBy =
  | 'id'
  | 'cityIndex'
  | 'cityIndex__id'
  | 'cityIndex__owner'
  | 'cityIndex__name'
  | 'cityIndex__code'
  | 'cityIndex__symbol'
  | 'cityIndex__squareFeet'
  | 'cityIndex__createdAtBlock'
  | 'cityIndex__createdAtTimestamp'
  | 'seller'
  | 'amount'
  | 'blockNumber'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  cityIndexFactory: InContextSdkMethod<Query['cityIndexFactory'], QuerycityIndexFactoryArgs, MeshContext>,
  /** null **/
  cityIndexFactories: InContextSdkMethod<Query['cityIndexFactories'], QuerycityIndexFactoriesArgs, MeshContext>,
  /** null **/
  cityIndex: InContextSdkMethod<Query['cityIndex'], QuerycityIndexArgs, MeshContext>,
  /** null **/
  cityIndexes: InContextSdkMethod<Query['cityIndexes'], QuerycityIndexesArgs, MeshContext>,
  /** null **/
  codeUpdate: InContextSdkMethod<Query['codeUpdate'], QuerycodeUpdateArgs, MeshContext>,
  /** null **/
  codeUpdates: InContextSdkMethod<Query['codeUpdates'], QuerycodeUpdatesArgs, MeshContext>,
  /** null **/
  priceFeedRequest: InContextSdkMethod<Query['priceFeedRequest'], QuerypriceFeedRequestArgs, MeshContext>,
  /** null **/
  priceFeedRequests: InContextSdkMethod<Query['priceFeedRequests'], QuerypriceFeedRequestsArgs, MeshContext>,
  /** null **/
  tokenBuy: InContextSdkMethod<Query['tokenBuy'], QuerytokenBuyArgs, MeshContext>,
  /** null **/
  tokenBuys: InContextSdkMethod<Query['tokenBuys'], QuerytokenBuysArgs, MeshContext>,
  /** null **/
  tokenSell: InContextSdkMethod<Query['tokenSell'], QuerytokenSellArgs, MeshContext>,
  /** null **/
  tokenSells: InContextSdkMethod<Query['tokenSells'], QuerytokenSellsArgs, MeshContext>,
  /** null **/
  cityIndexCreated: InContextSdkMethod<Query['cityIndexCreated'], QuerycityIndexCreatedArgs, MeshContext>,
  /** null **/
  cityIndexCreateds: InContextSdkMethod<Query['cityIndexCreateds'], QuerycityIndexCreatedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  cityIndexFactory: InContextSdkMethod<Subscription['cityIndexFactory'], SubscriptioncityIndexFactoryArgs, MeshContext>,
  /** null **/
  cityIndexFactories: InContextSdkMethod<Subscription['cityIndexFactories'], SubscriptioncityIndexFactoriesArgs, MeshContext>,
  /** null **/
  cityIndex: InContextSdkMethod<Subscription['cityIndex'], SubscriptioncityIndexArgs, MeshContext>,
  /** null **/
  cityIndexes: InContextSdkMethod<Subscription['cityIndexes'], SubscriptioncityIndexesArgs, MeshContext>,
  /** null **/
  codeUpdate: InContextSdkMethod<Subscription['codeUpdate'], SubscriptioncodeUpdateArgs, MeshContext>,
  /** null **/
  codeUpdates: InContextSdkMethod<Subscription['codeUpdates'], SubscriptioncodeUpdatesArgs, MeshContext>,
  /** null **/
  priceFeedRequest: InContextSdkMethod<Subscription['priceFeedRequest'], SubscriptionpriceFeedRequestArgs, MeshContext>,
  /** null **/
  priceFeedRequests: InContextSdkMethod<Subscription['priceFeedRequests'], SubscriptionpriceFeedRequestsArgs, MeshContext>,
  /** null **/
  tokenBuy: InContextSdkMethod<Subscription['tokenBuy'], SubscriptiontokenBuyArgs, MeshContext>,
  /** null **/
  tokenBuys: InContextSdkMethod<Subscription['tokenBuys'], SubscriptiontokenBuysArgs, MeshContext>,
  /** null **/
  tokenSell: InContextSdkMethod<Subscription['tokenSell'], SubscriptiontokenSellArgs, MeshContext>,
  /** null **/
  tokenSells: InContextSdkMethod<Subscription['tokenSells'], SubscriptiontokenSellsArgs, MeshContext>,
  /** null **/
  cityIndexCreated: InContextSdkMethod<Subscription['cityIndexCreated'], SubscriptioncityIndexCreatedArgs, MeshContext>,
  /** null **/
  cityIndexCreateds: InContextSdkMethod<Subscription['cityIndexCreateds'], SubscriptioncityIndexCreatedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["base-sepolia"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
