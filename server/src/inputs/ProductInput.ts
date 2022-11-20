import { InputType, Field, Int } from "type-graphql"

@InputType()
export class CreateProductInput {
  @Field()
  name!: string

  @Field(() => Int)
  sizePerUnit!: number

  @Field()
  isHazardous!: boolean
}

@InputType()
export class UpdateProductInput {
  @Field(() => Int)
  id!: number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Int, { nullable: true })
  sizePerUnit?: number

  @Field(() => Boolean, { nullable: true })
  isHazardous?: boolean
}
