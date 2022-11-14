import connection from "../db/database.js";
import { QueryResult } from "pg";
import * as database from "../db/tables.js";
import {
  newRegisterLibrary,
  newRegisterLibraryEntity,
  checkReadingEntity,
  updateReadingEntity,
  deleteReadinfEntity
} from "../protocols/dataLibrary.js";

function registerNewReading({
  book,
  status,
  userId,
}: newRegisterLibraryEntity): Promise<QueryResult<newRegisterLibrary>> {
  return connection.query(
    `INSERT INTO ${database.TABLE_LIBRARY} ("userId", book, status) VALUES ($1, $2, $3);`,
    [userId, book, status]
  );
}

function checkReading({
  book,
  userId,
}: checkReadingEntity): Promise<QueryResult<newRegisterLibrary>> {
  return connection.query(
    `SELECT * FROM ${database.TABLE_LIBRARY} WHERE "userId" = $1 AND book = $2;  `,
    [userId, book]
  );
}

function updateReadingRegister({
  status,
  id,
}: updateReadingEntity): Promise<QueryResult<newRegisterLibrary>> {
  return connection.query(
    `UPDATE ${database.TABLE_LIBRARY} SET status = $1 WHERE id = $2;`,
    [status, id]
  );
}


function deleteReadingRegister({id, userId}: deleteReadinfEntity) : Promise<QueryResult<deleteReadinfEntity>> {
  return connection.query(`DELETE FROM ${database.TABLE_LIBRARY} WHERE id = $1 AND "userId" = $2;`, [id, userId]);
}

export { registerNewReading, checkReading, updateReadingRegister, deleteReadingRegister  };
