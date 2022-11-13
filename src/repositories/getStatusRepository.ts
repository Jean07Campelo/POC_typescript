import connection from "../db/database.js";
import { QueryResult } from "pg";
import * as database from "../db/tables.js";
import { dataStatus } from "../protocols/dataStatus.js";

function getStatus(): Promise<QueryResult<dataStatus>> {
  return connection.query(`SELECT * FROM ${database.TABLE_STATUS};`);
}

export { getStatus };
