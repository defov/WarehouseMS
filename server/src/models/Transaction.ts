import { Field, GraphQLTimestamp, Int, ObjectType } from "type-graphql"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Check,
  BaseEntity,
} from "typeorm"
import { Stack } from "./Stack"

export enum TransactionType {
  IMPORT = "import",
  EXPORT = "export",
}

@ObjectType()
@Entity()
@Check(`"amount" > 0`)
export class Transaction extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Field(() => String)
  @Column({ type: "enum", enum: TransactionType, nullable: false })
  type: TransactionType

  // @Field(() => Stack)
  @ManyToOne((type) => Stack, (stack) => stack.transactions, {
    nullable: false,
  })
  stack: Stack

  @Field(() => Int)
  @Column({ type: "int", nullable: false })
  amount: number

  @Field(() => GraphQLTimestamp)
  @Column({ type: "timestamp", nullable: false })
  createdAt: number
}
