import { CreateTransactionInput } from "../inputs/TransactionInput"
import { Transaction } from "../models/Transaction"
import * as StackService from "./StackService"

export async function getAll(): Promise<Transaction[]> {
  return Transaction.find({
    relations: {
      stack: {
        product: true,
        warehouse: true,
      },
    },
  })
}

export async function getById(id: number): Promise<Transaction | null> {
  return Transaction.findOne({
    where: { id: id },
    relations: {
      stack: {
        product: true,
        warehouse: true,
      },
    },
  })
}

export async function createTransaction({
  type,
  amount,
  warehouseId,
  productId,
  createdAt,
}: CreateTransactionInput): Promise<Transaction> {
  const stackExists = await StackService.getStack(warehouseId, productId)
  if (!stackExists) await StackService.createStack(warehouseId, productId)

  const transaction = new Transaction()
  transaction.type = type
  transaction.amount = amount
  const stack = await StackService.updateStack(
    warehouseId,
    productId,
    transaction
  )
  transaction.stack = stack
  transaction.createdAt = createdAt || Date.now()

  return transaction.save()
}
