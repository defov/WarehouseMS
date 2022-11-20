import { CreateProductInput, UpdateProductInput } from "../inputs/ProductInput"
import { Product } from "../models/Product"

export async function getAll(): Promise<Product[]> {
  return Product.find({
    relations: {
      stacks: {
        warehouse: true,
        transactions: true,
      },
    },
  })
}

export async function getById(id: number): Promise<Product | null> {
  return Product.findOne({
    where: { id: id },
    relations: {
      stacks: {
        warehouse: true,
        transactions: true,
      },
    },
  })
}

export async function createProduct(
  input: CreateProductInput
): Promise<Product> {
  const product = new Product()
  Object.assign(product, input)
  return product.save()
}

export async function updateProduct({
  id,
  name,
  sizePerUnit,
  isHazardous,
}: UpdateProductInput): Promise<Product> {
  const product = await getById(id)

  if (!product) throw Error("Product not found")
  if (name) product.name = name
  if (sizePerUnit) product.sizePerUnit = sizePerUnit
  if (isHazardous) product.isHazardous = isHazardous

  return product.save()
}

export async function deleteProduct(id: number): Promise<Product> {
  const product = await getById(id)

  if (!product) throw Error("Warehouse not found")

  return product.remove()
}
