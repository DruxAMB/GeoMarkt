// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import UsePollingLive from "@graphprotocol/client-polling-live";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BaseSepoliaTypes } from './sources/base-sepolia/types';
import * as importedModule$0 from "./sources/base-sepolia/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  CityIndex: ResolverTypeWrapper<CityIndex>;
  CityIndexCreated: ResolverTypeWrapper<CityIndexCreated>;
  CityIndexCreated_filter: CityIndexCreated_filter;
  CityIndexCreated_orderBy: CityIndexCreated_orderBy;
  CityIndexFactory: ResolverTypeWrapper<CityIndexFactory>;
  CityIndexFactory_filter: CityIndexFactory_filter;
  CityIndexFactory_orderBy: CityIndexFactory_orderBy;
  CityIndex_filter: CityIndex_filter;
  CityIndex_orderBy: CityIndex_orderBy;
  CodeUpdate: ResolverTypeWrapper<CodeUpdate>;
  CodeUpdate_filter: CodeUpdate_filter;
  CodeUpdate_orderBy: CodeUpdate_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  OrderDirection: OrderDirection;
  PriceFeedRequest: ResolverTypeWrapper<PriceFeedRequest>;
  PriceFeedRequest_filter: PriceFeedRequest_filter;
  PriceFeedRequest_orderBy: PriceFeedRequest_orderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  TokenBuy: ResolverTypeWrapper<TokenBuy>;
  TokenBuy_filter: TokenBuy_filter;
  TokenBuy_orderBy: TokenBuy_orderBy;
  TokenSell: ResolverTypeWrapper<TokenSell>;
  TokenSell_filter: TokenSell_filter;
  TokenSell_orderBy: TokenSell_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  CityIndex: CityIndex;
  CityIndexCreated: CityIndexCreated;
  CityIndexCreated_filter: CityIndexCreated_filter;
  CityIndexFactory: CityIndexFactory;
  CityIndexFactory_filter: CityIndexFactory_filter;
  CityIndex_filter: CityIndex_filter;
  CodeUpdate: CodeUpdate;
  CodeUpdate_filter: CodeUpdate_filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  PriceFeedRequest: PriceFeedRequest;
  PriceFeedRequest_filter: PriceFeedRequest_filter;
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  Timestamp: Scalars['Timestamp']['output'];
  TokenBuy: TokenBuy;
  TokenBuy_filter: TokenBuy_filter;
  TokenSell: TokenSell;
  TokenSell_filter: TokenSell_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CityIndexResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CityIndex'] = ResolversParentTypes['CityIndex']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  squareFeet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  codeUpdates?: Resolver<Array<ResolversTypes['CodeUpdate']>, ParentType, ContextType, RequireFields<CityIndexcodeUpdatesArgs, 'skip' | 'first'>>;
  priceFeedRequests?: Resolver<Array<ResolversTypes['PriceFeedRequest']>, ParentType, ContextType, RequireFields<CityIndexpriceFeedRequestsArgs, 'skip' | 'first'>>;
  tokenBuys?: Resolver<Array<ResolversTypes['TokenBuy']>, ParentType, ContextType, RequireFields<CityIndextokenBuysArgs, 'skip' | 'first'>>;
  tokenSells?: Resolver<Array<ResolversTypes['TokenSell']>, ParentType, ContextType, RequireFields<CityIndextokenSellsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CityIndexCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CityIndexCreated'] = ResolversParentTypes['CityIndexCreated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  cityIndexAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  squareFeet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CityIndexFactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CityIndexFactory'] = ResolversParentTypes['CityIndexFactory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cityIndexes?: Resolver<Array<ResolversTypes['CityIndex']>, ParentType, ContextType, RequireFields<CityIndexFactorycityIndexesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CodeUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CodeUpdate'] = ResolversParentTypes['CodeUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cityIndex?: Resolver<ResolversTypes['CityIndex'], ParentType, ContextType>;
  oldCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type PriceFeedRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceFeedRequest'] = ResolversParentTypes['PriceFeedRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cityIndex?: Resolver<ResolversTypes['CityIndex'], ParentType, ContextType>;
  subscriptionId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  cityIndexFactory?: Resolver<Maybe<ResolversTypes['CityIndexFactory']>, ParentType, ContextType, RequireFields<QuerycityIndexFactoryArgs, 'id' | 'subgraphError'>>;
  cityIndexFactories?: Resolver<Array<ResolversTypes['CityIndexFactory']>, ParentType, ContextType, RequireFields<QuerycityIndexFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  cityIndex?: Resolver<Maybe<ResolversTypes['CityIndex']>, ParentType, ContextType, RequireFields<QuerycityIndexArgs, 'id' | 'subgraphError'>>;
  cityIndexes?: Resolver<Array<ResolversTypes['CityIndex']>, ParentType, ContextType, RequireFields<QuerycityIndexesArgs, 'skip' | 'first' | 'subgraphError'>>;
  codeUpdate?: Resolver<Maybe<ResolversTypes['CodeUpdate']>, ParentType, ContextType, RequireFields<QuerycodeUpdateArgs, 'id' | 'subgraphError'>>;
  codeUpdates?: Resolver<Array<ResolversTypes['CodeUpdate']>, ParentType, ContextType, RequireFields<QuerycodeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceFeedRequest?: Resolver<Maybe<ResolversTypes['PriceFeedRequest']>, ParentType, ContextType, RequireFields<QuerypriceFeedRequestArgs, 'id' | 'subgraphError'>>;
  priceFeedRequests?: Resolver<Array<ResolversTypes['PriceFeedRequest']>, ParentType, ContextType, RequireFields<QuerypriceFeedRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenBuy?: Resolver<Maybe<ResolversTypes['TokenBuy']>, ParentType, ContextType, RequireFields<QuerytokenBuyArgs, 'id' | 'subgraphError'>>;
  tokenBuys?: Resolver<Array<ResolversTypes['TokenBuy']>, ParentType, ContextType, RequireFields<QuerytokenBuysArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenSell?: Resolver<Maybe<ResolversTypes['TokenSell']>, ParentType, ContextType, RequireFields<QuerytokenSellArgs, 'id' | 'subgraphError'>>;
  tokenSells?: Resolver<Array<ResolversTypes['TokenSell']>, ParentType, ContextType, RequireFields<QuerytokenSellsArgs, 'skip' | 'first' | 'subgraphError'>>;
  cityIndexCreated?: Resolver<Maybe<ResolversTypes['CityIndexCreated']>, ParentType, ContextType, RequireFields<QuerycityIndexCreatedArgs, 'id' | 'subgraphError'>>;
  cityIndexCreateds?: Resolver<Array<ResolversTypes['CityIndexCreated']>, ParentType, ContextType, RequireFields<QuerycityIndexCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  cityIndexFactory?: SubscriptionResolver<Maybe<ResolversTypes['CityIndexFactory']>, "cityIndexFactory", ParentType, ContextType, RequireFields<SubscriptioncityIndexFactoryArgs, 'id' | 'subgraphError'>>;
  cityIndexFactories?: SubscriptionResolver<Array<ResolversTypes['CityIndexFactory']>, "cityIndexFactories", ParentType, ContextType, RequireFields<SubscriptioncityIndexFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  cityIndex?: SubscriptionResolver<Maybe<ResolversTypes['CityIndex']>, "cityIndex", ParentType, ContextType, RequireFields<SubscriptioncityIndexArgs, 'id' | 'subgraphError'>>;
  cityIndexes?: SubscriptionResolver<Array<ResolversTypes['CityIndex']>, "cityIndexes", ParentType, ContextType, RequireFields<SubscriptioncityIndexesArgs, 'skip' | 'first' | 'subgraphError'>>;
  codeUpdate?: SubscriptionResolver<Maybe<ResolversTypes['CodeUpdate']>, "codeUpdate", ParentType, ContextType, RequireFields<SubscriptioncodeUpdateArgs, 'id' | 'subgraphError'>>;
  codeUpdates?: SubscriptionResolver<Array<ResolversTypes['CodeUpdate']>, "codeUpdates", ParentType, ContextType, RequireFields<SubscriptioncodeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  priceFeedRequest?: SubscriptionResolver<Maybe<ResolversTypes['PriceFeedRequest']>, "priceFeedRequest", ParentType, ContextType, RequireFields<SubscriptionpriceFeedRequestArgs, 'id' | 'subgraphError'>>;
  priceFeedRequests?: SubscriptionResolver<Array<ResolversTypes['PriceFeedRequest']>, "priceFeedRequests", ParentType, ContextType, RequireFields<SubscriptionpriceFeedRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenBuy?: SubscriptionResolver<Maybe<ResolversTypes['TokenBuy']>, "tokenBuy", ParentType, ContextType, RequireFields<SubscriptiontokenBuyArgs, 'id' | 'subgraphError'>>;
  tokenBuys?: SubscriptionResolver<Array<ResolversTypes['TokenBuy']>, "tokenBuys", ParentType, ContextType, RequireFields<SubscriptiontokenBuysArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenSell?: SubscriptionResolver<Maybe<ResolversTypes['TokenSell']>, "tokenSell", ParentType, ContextType, RequireFields<SubscriptiontokenSellArgs, 'id' | 'subgraphError'>>;
  tokenSells?: SubscriptionResolver<Array<ResolversTypes['TokenSell']>, "tokenSells", ParentType, ContextType, RequireFields<SubscriptiontokenSellsArgs, 'skip' | 'first' | 'subgraphError'>>;
  cityIndexCreated?: SubscriptionResolver<Maybe<ResolversTypes['CityIndexCreated']>, "cityIndexCreated", ParentType, ContextType, RequireFields<SubscriptioncityIndexCreatedArgs, 'id' | 'subgraphError'>>;
  cityIndexCreateds?: SubscriptionResolver<Array<ResolversTypes['CityIndexCreated']>, "cityIndexCreateds", ParentType, ContextType, RequireFields<SubscriptioncityIndexCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TokenBuyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenBuy'] = ResolversParentTypes['TokenBuy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cityIndex?: Resolver<ResolversTypes['CityIndex'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenSellResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenSell'] = ResolversParentTypes['TokenSell']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cityIndex?: Resolver<ResolversTypes['CityIndex'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  CityIndex?: CityIndexResolvers<ContextType>;
  CityIndexCreated?: CityIndexCreatedResolvers<ContextType>;
  CityIndexFactory?: CityIndexFactoryResolvers<ContextType>;
  CodeUpdate?: CodeUpdateResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  PriceFeedRequest?: PriceFeedRequestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  TokenBuy?: TokenBuyResolvers<ContextType>;
  TokenSell?: TokenSellResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BaseSepoliaTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/base-sepolia/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const baseSepoliaTransforms = [];
const additionalTypeDefs = [] as any[];
const baseSepoliaHandler = new GraphqlHandler({
              name: "base-sepolia",
              config: {"endpoint":"https://api.studio.thegraph.com/query/88691/geomarket/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("base-sepolia"),
              logger: logger.child("base-sepolia"),
              importFn,
            });
sources[0] = {
          name: 'base-sepolia',
          handler: baseSepoliaHandler,
          transforms: baseSepoliaTransforms
        }
additionalEnvelopPlugins[0] = await UsePollingLive({
          ...({
  "defaultInterval": 10000,
  "pauseOnBackground": true
}),
          logger: logger.child("pollingLive"),
          cache,
          pubsub,
          baseDir,
          importFn,
        })
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const documentHashMap = {
        "80891f0df7377fd0293f2c7bb65b6a0f67d46cc6766340732b68d6d394eee68d": MyQueryDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: MyQueryDocument,
        get rawSDL() {
          return printWithCache(MyQueryDocument);
        },
        location: 'MyQueryDocument.graphql',
        sha256Hash: '80891f0df7377fd0293f2c7bb65b6a0f67d46cc6766340732b68d6d394eee68d'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { cityIndexCreateds: Array<Pick<CityIndexCreated, 'owner' | 'squareFeet' | 'symbol' | 'timestamp' | 'id' | 'cityIndexAddress' | 'blockNumber' | 'code' | 'name'>>, cityIndexes: Array<(
    Pick<CityIndex, 'name' | 'owner' | 'squareFeet' | 'symbol' | 'createdAtBlock' | 'createdAtTimestamp' | 'id'>
    & { tokenSells: Array<Pick<TokenSell, 'amount' | 'blockNumber' | 'id' | 'seller' | 'timestamp'>>, tokenBuys: Array<Pick<TokenBuy, 'blockNumber' | 'amount' | 'buyer' | 'id' | 'timestamp'>> }
  )>, cityIndexFactories: Array<{ cityIndexes: Array<Pick<CityIndex, 'createdAtBlock' | 'createdAtTimestamp' | 'id' | 'name' | 'owner' | 'squareFeet' | 'symbol'>> }> };


export const MyQueryDocument = gql`
    query MyQuery @live {
  cityIndexCreateds {
    owner
    squareFeet
    symbol
    timestamp
    id
    cityIndexAddress
    blockNumber
    code
    name
  }
  cityIndexes {
    name
    owner
    squareFeet
    symbol
    tokenSells {
      amount
      blockNumber
      id
      seller
      timestamp
    }
    createdAtBlock
    createdAtTimestamp
    id
    tokenBuys {
      blockNumber
      amount
      buyer
      id
      timestamp
    }
  }
  cityIndexFactories {
    cityIndexes {
      createdAtBlock
      createdAtTimestamp
      id
      name
      owner
      squareFeet
      symbol
    }
  }
}
    ` as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    MyQuery(variables?: MyQueryQueryVariables, options?: C): AsyncIterable<MyQueryQuery> {
      return requester<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, variables, options) as AsyncIterable<MyQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;