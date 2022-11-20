import { Resolver, Query, Arg, Mutation, Int } from "type-graphql"
import {
  CreateWarehouseInput,
  UpdateWarehouseInput,
} from "../inputs/WarehouseInput"
import { Warehouse } from "../models/Warehouse"
import * as WarehouseService from "../services/WarehouseService"

@Resolver()
export class WarehouseResolver {
  @Query(() => Warehouse)
  warehouse(@Arg("id", () => Int) id: number) {
    return WarehouseService.getById(id)
  }

  @Query(() => [Warehouse])
  warehouses() {
    return WarehouseService.getAll()
  }

  @Mutation(() => Warehouse)
  createWarehouse(@Arg("input") input: CreateWarehouseInput) {
    return WarehouseService.createWarehouse(input)
  }

  @Mutation(() => Warehouse)
  updateWarehouse(@Arg("input") input: UpdateWarehouseInput) {
    return WarehouseService.updateWarehouse(input)
  }

  @Mutation(() => Warehouse)
  deleteWarehouse(@Arg("id") id: number) {
    return WarehouseService.deleteWarehouse(id)
  }
}
