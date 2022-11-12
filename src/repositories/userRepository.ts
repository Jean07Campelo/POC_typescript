import connection from "../db/database.js";
import { QueryResult } from "pg";
import * as database from "../db/tables.js";
import { dataUser, dataUserEntity } from "../protocols/dataUser.js";

function registerNewUser({
  username,
  email,
  password,
}: dataUserEntity): Promise<QueryResult<dataUser>> {
  return connection.query(
    `INSERT INTO ${database.TABLE_USERS} (username, email, password) VALUES ($1, $2, $3);`,
    [username, email, password]
  );
}

function registers(email: string): Promise<QueryResult<dataUser>> {
  return connection.query(
    `SELECT * FROM ${database.TABLE_USERS} WHERE email = $1;`,
    [email]
  );
}

export { registerNewUser, registers };
