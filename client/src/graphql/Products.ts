import { gql } from "@apollo/client"

export const QUERY_PRODUCTS = gql`
  query Products {
    products {
      id
      isHazardous
      name
      sizePerUnit
    }
  }
`

export const MUTATION_CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      isHazardous
      sizePerUnit
    }
  }
`
