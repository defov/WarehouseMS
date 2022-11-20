import { Stack } from "../models/Stack"
import { Transaction, TransactionType } from "../models/Transaction"

export const validateStackAmount = (
  stack: Stack,
  transaction: Transaction
): number => {
  switch (transaction.type) {
    case TransactionType.IMPORT:
      const stackSize = stack.amount * stack.product!.sizePerUnit
      if (stack.warehouse.maxAmount < stackSize + stack.warehouse!.freeAmount)
        throw Error("Not enough space to complete the transaction")
      return stack.amount + transaction.amount
    case TransactionType.EXPORT:
      if (stack.amount < transaction.amount)
        throw Error("Not enough products to complete the transaction")
      return stack.amount - transaction.amount
    default:
      throw Error("Invalid transaction type")
  }
}
