/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type CreateProductInput = {
  isHazardous: Scalars['Boolean'];
  name: Scalars['String'];
  sizePerUnit: Scalars['Int'];
};

export type CreateTransactionInput = {
  amount: Scalars['Int'];
  createdAt: Scalars['Timestamp'];
  productId: Scalars['Int'];
  type: Scalars['String'];
  warehouseId: Scalars['Int'];
};

export type CreateWarehouseInput = {
  maxAmount: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createTransaction: Transaction;
  createWarehouse: Warehouse;
  deleteProduct: Product;
  deleteWarehouse: Warehouse;
  updateProduct: Product;
  updateWarehouse: Warehouse;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


export type MutationCreateWarehouseArgs = {
  input: CreateWarehouseInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateWarehouseArgs = {
  input: UpdateWarehouseInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int'];
  isHazardous: Scalars['Boolean'];
  name: Scalars['String'];
  sizePerUnit: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  products: Array<Product>;
  transaction: Transaction;
  transactions: Array<Transaction>;
  warehouse: Warehouse;
  warehouses: Array<Warehouse>;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QueryTransactionArgs = {
  id: Scalars['Int'];
};


export type QueryWarehouseArgs = {
  id: Scalars['Int'];
};

export type Stack = {
  __typename?: 'Stack';
  amount: Scalars['Int'];
  id: Scalars['Int'];
  product: Product;
  transactions: Array<Transaction>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Int'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['Int'];
  type: Scalars['String'];
};

export type UpdateProductInput = {
  id: Scalars['Int'];
  isHazardous?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  sizePerUnit?: InputMaybe<Scalars['Int']>;
};

export type UpdateWarehouseInput = {
  id: Scalars['Int'];
  maxAmount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  freeAmount: Scalars['Int'];
  id: Scalars['Int'];
  maxAmount: Scalars['Float'];
  name: Scalars['String'];
  stacks: Array<Stack>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, isHazardous: boolean, name: string, sizePerUnit: number }> };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', id: number, name: string, isHazardous: boolean, sizePerUnit: number } };

export type CreateTransactionMutationVariables = Exact<{
  input: CreateTransactionInput;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction: { __typename?: 'Transaction', id: number, type: string, amount: number, createdAt: any } };

export type WarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: Array<{ __typename?: 'Warehouse', id: number, name: string, maxAmount: number, freeAmount: number }> };

export type WarehouseQueryVariables = Exact<{
  warehouseId: Scalars['Int'];
}>;


export type WarehouseQuery = { __typename?: 'Query', warehouse: { __typename?: 'Warehouse', id: number, name: string, freeAmount: number, maxAmount: number, stacks: Array<{ __typename?: 'Stack', id: number, amount: number, product: { __typename?: 'Product', id: number, name: string, sizePerUnit: number, isHazardous: boolean }, transactions: Array<{ __typename?: 'Transaction', id: number, type: string, amount: number, createdAt: any }> }> } };

export type CreateWarehouseMutationVariables = Exact<{
  input: CreateWarehouseInput;
}>;


export type CreateWarehouseMutation = { __typename?: 'Mutation', createWarehouse: { __typename?: 'Warehouse', id: number, name: string } };


export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isHazardous"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sizePerUnit"}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isHazardous"}},{"kind":"Field","name":{"kind":"Name","value":"sizePerUnit"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const CreateTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTransactionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const WarehousesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Warehouses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"maxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"freeAmount"}}]}}]}}]} as unknown as DocumentNode<WarehousesQuery, WarehousesQueryVariables>;
export const WarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Warehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"warehouseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"freeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"maxAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stacks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sizePerUnit"}},{"kind":"Field","name":{"kind":"Name","value":"isHazardous"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WarehouseQuery, WarehouseQueryVariables>;
export const CreateWarehouseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWarehouse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateWarehouseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWarehouse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateWarehouseMutation, CreateWarehouseMutationVariables>;