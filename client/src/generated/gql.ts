/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Products {\n    products {\n      id\n      isHazardous\n      name\n      sizePerUnit\n    }\n  }\n": types.ProductsDocument,
    "\n  mutation CreateProduct($input: CreateProductInput!) {\n    createProduct(input: $input) {\n      id\n      name\n      isHazardous\n      sizePerUnit\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation CreateTransaction($input: CreateTransactionInput!) {\n    createTransaction(input: $input) {\n      id\n      type\n      amount\n      createdAt\n    }\n  }\n": types.CreateTransactionDocument,
    "\n  query Warehouses {\n    warehouses {\n      id\n      name\n      maxAmount\n      freeAmount\n    }\n  }\n": types.WarehousesDocument,
    "\n  query Warehouse($warehouseId: Int!) {\n    warehouse(id: $warehouseId) {\n      id\n      name\n      freeAmount\n      maxAmount\n      stacks {\n        id\n        product {\n          id\n          name\n          sizePerUnit\n          isHazardous\n        }\n        amount\n        transactions {\n          id\n          type\n          amount\n          createdAt\n        }\n      }\n    }\n  }\n": types.WarehouseDocument,
    "\n  mutation CreateWarehouse($input: CreateWarehouseInput!) {\n    createWarehouse(input: $input) {\n      id\n      name\n    }\n  }\n": types.CreateWarehouseDocument,
};

export function graphql(source: "\n  query Products {\n    products {\n      id\n      isHazardous\n      name\n      sizePerUnit\n    }\n  }\n"): (typeof documents)["\n  query Products {\n    products {\n      id\n      isHazardous\n      name\n      sizePerUnit\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateProduct($input: CreateProductInput!) {\n    createProduct(input: $input) {\n      id\n      name\n      isHazardous\n      sizePerUnit\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProduct($input: CreateProductInput!) {\n    createProduct(input: $input) {\n      id\n      name\n      isHazardous\n      sizePerUnit\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateTransaction($input: CreateTransactionInput!) {\n    createTransaction(input: $input) {\n      id\n      type\n      amount\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTransaction($input: CreateTransactionInput!) {\n    createTransaction(input: $input) {\n      id\n      type\n      amount\n      createdAt\n    }\n  }\n"];
export function graphql(source: "\n  query Warehouses {\n    warehouses {\n      id\n      name\n      maxAmount\n      freeAmount\n    }\n  }\n"): (typeof documents)["\n  query Warehouses {\n    warehouses {\n      id\n      name\n      maxAmount\n      freeAmount\n    }\n  }\n"];
export function graphql(source: "\n  query Warehouse($warehouseId: Int!) {\n    warehouse(id: $warehouseId) {\n      id\n      name\n      freeAmount\n      maxAmount\n      stacks {\n        id\n        product {\n          id\n          name\n          sizePerUnit\n          isHazardous\n        }\n        amount\n        transactions {\n          id\n          type\n          amount\n          createdAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Warehouse($warehouseId: Int!) {\n    warehouse(id: $warehouseId) {\n      id\n      name\n      freeAmount\n      maxAmount\n      stacks {\n        id\n        product {\n          id\n          name\n          sizePerUnit\n          isHazardous\n        }\n        amount\n        transactions {\n          id\n          type\n          amount\n          createdAt\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateWarehouse($input: CreateWarehouseInput!) {\n    createWarehouse(input: $input) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWarehouse($input: CreateWarehouseInput!) {\n    createWarehouse(input: $input) {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;