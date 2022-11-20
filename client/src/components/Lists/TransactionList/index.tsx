import { Warehouse } from "../../../generated/graphql"
import Table from "../../Table"

interface Props {
  warehouse: Warehouse
}

const TransactionList = ({ warehouse }: Props) => {
  const cols = ["id", "type", "product name", "amount", "date"]
  const rows = warehouse.stacks.flatMap((stack) =>
    stack.transactions.map((transaction) => [
      transaction.id.toString(),
      transaction.type,
      stack.product.name,
      transaction.amount.toString(),
      new Date(transaction.createdAt).toLocaleDateString(),
    ])
  )

  return <Table cols={cols} rows={rows} />
}

export default TransactionList
