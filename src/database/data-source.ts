import "reflect-metadata";
import { DataSource } from "typeorm";
import { Person } from "./entities/Person";
import { Environment } from '../config/enviroment';

Environment.setup();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "test",
  password: process.env.DB_PASSWORD || "test",
  database: process.env.DB_DATABASE || "test",
  synchronize: true,
  logging: false,
  entities: [Person],
  migrations: [],
  subscribers: [],
})
