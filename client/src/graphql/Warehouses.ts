import { gql } from "@apollo/client"

export const QUERY_WAREHOUSES = gql`
  query Warehouses {
    warehouses {
      id
      name
      maxAmount
      freeAmount
    }
  }
`

export const QUERY_WAREHOUSE = gql`
  query Warehouse($warehouseId: Int!) {
    warehouse(id: $warehouseId) {
      id
      name
      freeAmount
      maxAmount
      stacks {
        id
        product {
          id
          name
          sizePerUnit
          isHazardous
        }
        amount
        transactions {
          id
          type
          amount
          createdAt
        }
      }
    }
  }
`

export const MUTATION_CREATE_WAREHOUSE = gql`
  mutation CreateWarehouse($input: CreateWarehouseInput!) {
    createWarehouse(input: $input) {
      id
      name
    }
  }
`
