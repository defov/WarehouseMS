import { gql } from "@apollo/client"

export const MUTATION_CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      id
      type
      amount
      createdAt
    }
  }
`
