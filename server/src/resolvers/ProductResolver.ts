import { Resolver, Query, Arg, Mutation, Int } from "type-graphql"
import { CreateProductInput, UpdateProductInput } from "../inputs/ProductInput"
import { Product } from "../models/Product"
import * as ProductService from "../services/ProductService"

@Resolver()
export class ProductResolver {
  @Query(() => Product)
  product(@Arg("id", () => Int) id: number) {
    return ProductService.getById(id)
  }

  @Query(() => [Product])
  products() {
    return ProductService.getAll()
  }

  @Mutation(() => Product)
  createProduct(@Arg("input") input: CreateProductInput) {
    return ProductService.createProduct(input)
  }

  @Mutation(() => Product)
  updateProduct(@Arg("input") input: UpdateProductInput) {
    return ProductService.updateProduct(input)
  }

  @Mutation(() => Product)
  deleteProduct(@Arg("id", () => Int) id: number) {
    return ProductService.deleteProduct(id)
  }
}
