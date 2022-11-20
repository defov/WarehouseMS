import { Field, Int, ObjectType } from "type-graphql"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Check,
  BaseEntity,
  AfterLoad,
} from "typeorm"
import { calculateFreeAmount } from "../services/WarehouseService"
import { Stack } from "./Stack"

@ObjectType()
@Entity()
@Check(`"maxAmount" > 0`)
export class Warehouse extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Field()
  @Column({ nullable: false, unique: true })
  name: string

  @Field()
  @Column({ type: "int", nullable: false })
  maxAmount: number

  @Field(() => [Stack])
  @OneToMany((type) => Stack, (stack) => stack.warehouse)
  stacks: Stack[]

  @Field(() => Int)
  freeAmount: number

  @AfterLoad()
  async afterLoad() {
    this.freeAmount = await calculateFreeAmount(this)
  }
}
