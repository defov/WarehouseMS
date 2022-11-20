import { Product } from "../../../generated/graphql"
import Table from "../../Table"

interface Props {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  const cols = ["id", "name", "size per unit", "hazardous"]
  const rows = products.map((product) => [
    product.id.toString(),
    product.name,
    product.sizePerUnit.toString(),
    product.isHazardous ? "Yes" : "No",
  ])

  return <Table cols={cols} rows={rows} />
}

export default ProductList
