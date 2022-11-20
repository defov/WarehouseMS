import { DataSource } from "typeorm"
require("dotenv").config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_ACCOUNT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/models/*.ts"],
})
