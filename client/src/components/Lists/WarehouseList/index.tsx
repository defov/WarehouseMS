import Table from "../../Table"
import { WarehousesQuery } from "../../../generated/graphql"

interface Props {
  warehousesQuery: WarehousesQuery
}

const WarehouseList = ({ warehousesQuery }: Props) => {
  const cols = ["id", "name", "max amount", "free amount"]
  const rows = warehousesQuery.warehouses.map((warehouse) => [
    warehouse.id.toString(),
    warehouse.name,
    warehouse.maxAmount?.toString(),
    warehouse.freeAmount?.toString(),
  ])
  return <Table cols={cols} rows={rows} />
}

export default WarehouseList
