import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { join } from 'path';
import { Config } from '../../config/credentials';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: Config.Database.Host,
  port: Config.Database.Port,
  username: Config.Database.Username,
  password: Config.Database.Password,
  database: Config.Database.DataBase,
  synchronize: false,
  logging: false,
  entities: [join(__dirname, '../**', '*.entity.{ts,js}')],
  subscribers: [],
});
  