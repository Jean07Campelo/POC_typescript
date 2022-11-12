import connection from "../db/database.js";
import { QueryResult } from "pg";
import * as database from "../db/tables.js";
import { DataUser, DataUserEntity } from "../protocols/dataUser.js";

function registerNewUser({
  username,
  email,
  password,
}: DataUserEntity): Promise<QueryResult<DataUser>> {
  return connection.query(
    `INSERT INTO ${database.TABLE_USERS} (username, email, password) VALUES ($1, $2, $3);`,
    [username, email, password]
  );
}

function registers(email: string): Promise<QueryResult<DataUser>> {
  return connection.query(
    `SELECT * FROM ${database.TABLE_USERS} WHERE email = $1;`,
    [email]
  );
}

export { registerNewUser, registers };
