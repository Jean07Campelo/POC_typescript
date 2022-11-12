import { QueryResult } from "pg";
import connection from "../db/database.js";
import * as database from "../db/tables.js";
import { dataCompany } from "../protocols/dataCompany.js";

function getCompanyByName(name: string): Promise<QueryResult<dataCompany>> {
  return connection.query(
    `SELECT * FROM ${database.TABLE_COMPANY} WHERE name = $1;`,
    [name]
  );
}

function registerNewCompany(name: string): Promise<QueryResult<dataCompany>> {
  return connection.query(
    `INSERT INTO ${database.TABLE_COMPANY} (name) VALUES ($1);`,
    [name]
  );
}

function getCompanies() {
  return connection.query(`SELECT * FROM ${database.TABLE_COMPANY};`);
}

export { getCompanyByName, registerNewCompany, getCompanies };
