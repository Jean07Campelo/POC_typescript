import connection from "../db/database.js";
import { QueryResult } from "pg";
import * as database from "../db/tables.js";
import {
  newRegisterLibrary,
  newRegisterLibraryEntity,
  checkReadingEntity,
  updateReadingEntity,
  deleteReadinfEntity,
} from "../protocols/dataLibrary.js";
import { dataBook } from "../protocols/dataBook.js";

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

function deleteReadingRegister({
  id,
  userId,
}: deleteReadinfEntity): Promise<QueryResult<deleteReadinfEntity>> {
  return connection.query(
    `DELETE FROM ${database.TABLE_LIBRARY} WHERE id = $1 AND "userId" = $2;`,
    [id, userId]
  );
}

function getPersonalLibrary(userId: number): Promise<QueryResult<dataBook>> {
  return connection.query(
    `
  SELECT b.id, 
  b.name, b.year,
  ${database.TABLE_AUTHOR}.name as author, 
  "publishingCompany".name as company,
  ${database.TABLE_STATUS}.name as status,
  b.synopsis, b."bookCover", b.pages
  
  FROM ${database.TABLE_BOOKS} b
  JOIN ${database.TABLE_AUTHOR} ON b.${database.TABLE_AUTHOR} = ${database.TABLE_AUTHOR}.id
  JOIN "publishingCompany" ON b.company = "publishingCompany".id
  JOIN ${database.TABLE_LIBRARY} ON ${database.TABLE_LIBRARY}.book = b.id
  JOIN ${database.TABLE_STATUS} ON ${database.TABLE_LIBRARY}.status = ${database.TABLE_STATUS}.id

  WHERE ${database.TABLE_LIBRARY}."userId" = $1
  ORDER BY ${database.TABLE_AUTHOR}.name;`,
    [userId]
  );
}

export {
  registerNewReading,
  checkReading,
  updateReadingRegister,
  deleteReadingRegister,
  getPersonalLibrary,
};
