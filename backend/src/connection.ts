import * as knex from 'knex';
import { config } from 'dotenv';

config();

const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST } = process.env;

export const connection = knex({
    client: 'postgresql',
    connection: {
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  })
