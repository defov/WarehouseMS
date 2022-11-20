import { Field, Int, ObjectType } from "type-graphql"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Check,
  BaseEntity,
} from "typeorm"
import { Product } from "./Product"
import { Transaction } from "./Transaction"
import { Warehouse } from "./Warehouse"

@ObjectType()
@Entity()
@Check(`"amount" >= 0`)
export class Stack extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  // @Field(() => Warehouse)
  @ManyToOne((type) => Warehouse, (warehouse) => warehouse.stacks, {
    nullable: false,
  })
  warehouse: Warehouse

  @Field(() => Product)
  @ManyToOne((type) => Product, (product) => product.stacks, {
    nullable: false,
  })
  product: Product

  @Field(() => [Transaction])
  @OneToMany((type) => Transaction, (transaction) => transaction.stack)
  transactions: Transaction[]

  @Field(() => Int)
  @Column({ type: "int", nullable: false })
  amount: number
}
