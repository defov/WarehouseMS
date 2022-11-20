import { InputType, Field, Int } from "type-graphql"

@InputType()
export class CreateWarehouseInput {
  @Field()
  name!: string

  @Field(() => Int)
  maxAmount!: number
}

@InputType()
export class UpdateWarehouseInput {
  @Field(() => Int)
  id!: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Int, { nullable: true })
  maxAmount?: number
}
