import "reflect-metadata"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"

import { WarehouseResolver } from "./resolvers/WarehouseResolver"
import { AppDataSource } from "./utils/data-source"

require("dotenv").config()

import cors from "cors"
import { ProductResolver } from "./resolvers/ProductResolver"
import { TransactionResolver } from "./resolvers/TransactionResolver"

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
}

async function main() {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Database connection is active!")
    })
    .catch((err: any) => {
      console.error("Error during Data Source initialization:", err)
    })

  const schema = await buildSchema({
    resolvers: [WarehouseResolver, ProductResolver, TransactionResolver],
  })

  const server = new ApolloServer({ schema })
  await server.start()

  const app = express()
  app.use(cors(corsOptions))

  server.applyMiddleware({ app })

  await app.listen({ port: process.env.SERVER_PORT }, () =>
    console.log(
      `Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`
    )
  )
}

main()
