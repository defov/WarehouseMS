import { InputType, Field, Int, GraphQLTimestamp } from "type-graphql"
import { TransactionType } from "../models/Transaction"

@InputType()
export class CreateTransactionInput {
  @Field(() => String)
  type!: TransactionType

  @Field(() => Int)
  amount!: number

  @Field(() => Int)
  productId!: number

  @Field(() => Int)
  warehouseId!: number

  @Field(() => GraphQLTimestamp)
  createdAt?: number
}
