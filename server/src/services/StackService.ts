import { Stack } from "../models/Stack"
import * as WarehouseService from "./WarehouseService"
import * as ProductService from "./ProductService"
import { Transaction } from "../models/Transaction"
import { validateStackAmount } from "../validators/StackValidator"

export async function getStack(
  warehouseId: number,
  productId: number
): Promise<Stack | null> {
  return Stack.findOne({
    where: { warehouse: { id: warehouseId }, product: { id: productId } },
    relations: {
      product: true,
      warehouse: {
        stacks: {
          product: true,
        },
      },
      transactions: true,
    },
  })
}

export async function createStack(
  warehouseId: number,
  productId: number
): Promise<Stack> {
  const warehouse = await WarehouseService.getById(warehouseId)
  if (!warehouse) throw Error("Warehouse not found")

  const product = await ProductService.getById(productId)
  if (!product) throw Error("Product not found")

  const hazardousWarehouse = warehouse.stacks!.find((stack) => stack.amount > 0)
    ?.product.isHazardous
  if (
    hazardousWarehouse != undefined &&
    hazardousWarehouse !== product.isHazardous
  ) {
    throw Error("This type of product doesn't belong to this warehouse")
  }

  const stack = new Stack()
  stack.warehouse = warehouse
  stack.product = product
  stack.amount = 0

  return stack.save()
}

export async function updateStack(
  warehouseId: number,
  productId: number,
  transaction: Transaction
): Promise<Stack> {
  const stack = await getStack(warehouseId, productId)
  if (!stack) throw Error("Stack not found!")
  stack.amount = validateStackAmount(stack, transaction)
  return stack.save()
}
