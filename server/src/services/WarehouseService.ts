import {
  CreateWarehouseInput,
  UpdateWarehouseInput,
} from "../inputs/WarehouseInput"
import { Warehouse } from "../models/Warehouse"
// import { requester } from "../utils/requester"
import fetch from "node-fetch"

export async function calculateFreeAmount(
  warehouse: Warehouse
): Promise<number> {
  const data = warehouse.stacks?.map((stack) => {
    return { amount: stack.amount, sizePerUnit: stack.product.sizePerUnit }
  })

  if (!data) return warehouse.maxAmount

  try {
    const response = await fetch("http://localhost:80/calculateFreeAmount", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        maxAmount: warehouse.maxAmount,
        stacks: data,
      }),
    })
    const json = await response.json()
    return json["freeAmount"]
    // const response = await requester(
    //   "http://localhost:80/calculateFreeAmount",
    //   "POST",
    //   { "content-type": "application/json" },
    //   JSON.stringify({
    //     maxAmount: warehouse.maxAmount,
    //     stacks: data,
    //   })
    // )
    // return response["freeAmount"]
  } catch (e) {
    return 0
  }
  // return warehouse.stacks?.reduce((sum, stack) => {
  //   return sum + stack.amount * stack.product.sizePerUnit
  // }, 0)
}

export async function getAll(): Promise<Warehouse[]> {
  return Warehouse.find({
    relations: {
      stacks: {
        product: true,
        transactions: true,
      },
    },
  })
}

export async function getById(id: number): Promise<Warehouse | null> {
  return Warehouse.findOne({
    where: { id: id },
    relations: {
      stacks: {
        product: true,
        transactions: true,
      },
    },
  })
}

export async function createWarehouse(
  input: CreateWarehouseInput
): Promise<Warehouse> {
  const warehouse = new Warehouse()
  Object.assign(warehouse, input)
  return warehouse.save()
}

export async function updateWarehouse({
  id,
  name,
  maxAmount,
}: UpdateWarehouseInput): Promise<Warehouse> {
  const warehouse = await getById(id)

  if (!warehouse) throw Error("Warehouse not found")
  if (name) warehouse.name
  if (maxAmount) warehouse.maxAmount

  return warehouse.save()
}

export async function deleteWarehouse(id: number): Promise<Warehouse> {
  const warehouse = await getById(id)
  if (!warehouse) throw Error("Warehouse not found")
  return warehouse.remove()
}
