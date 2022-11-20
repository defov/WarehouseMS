import { Field, Int, ObjectType } from "type-graphql"
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Check,
  BaseEntity,
} from "typeorm"
import { Stack } from "./Stack"

@ObjectType()
@Entity()
@Check(`"sizePerUnit" > 0`)
export class Product extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int" })
  id: number

  @Field(() => String)
  @Column({ nullable: false, unique: true })
  name: string

  @Field(() => Int)
  @Column({ type: "int", nullable: false })
  sizePerUnit: number

  @Field(() => Boolean)
  @Column({ nullable: false })
  isHazardous: boolean

  // @Field(() => [Stack])
  @OneToMany((type) => Stack, (stack) => stack.product)
  stacks: Stack[]
}
