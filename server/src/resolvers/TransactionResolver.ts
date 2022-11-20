import { Resolver, Query, Arg, Mutation, Int } from "type-graphql"
import { CreateTransactionInput } from "../inputs/TransactionInput"
import { Transaction } from "../models/Transaction"
import * as TransactionService from "../services/TransactionService"

@Resolver()
export class TransactionResolver {
  @Query(() => Transaction)
  transaction(@Arg("id", () => Int) id: number) {
    return TransactionService.getById(id)
  }

  @Query(() => [Transaction])
  transactions() {
    return TransactionService.getAll()
  }

  @Mutation(() => Transaction)
  createTransaction(@Arg("input") input: CreateTransactionInput) {
    return TransactionService.createTransaction(input)
  }
}
