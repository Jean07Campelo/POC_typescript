import { QueryResult } from "pg";
import connection from "../db/database.js";
import * as database from "../db/tables.js";
import { dataAuthor } from "../protocols/dataAuthor.js";

function registerNewAuthor(name: string): Promise<QueryResult<dataAuthor>> {
  return connection.query(
    `INSERT INTO ${database.TABLE_AUTHOR} (name) VALUES ($1);`,
    [name]
  );
}

function getAuthorByName(name: string): Promise<QueryResult<dataAuthor>> {
  return connection.query(
    `SELECT * FROM ${database.TABLE_AUTHOR} WHERE name = $1;`,
    [name]
  );
}

function getAllAuthors(): Promise<QueryResult<dataAuthor>> {
  return connection.query(`SELECT * FROM ${database.TABLE_AUTHOR};`);
}

export { registerNewAuthor, getAuthorByName, getAllAuthors };
