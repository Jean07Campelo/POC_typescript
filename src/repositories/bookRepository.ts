import connection from "../db/database.js";
import { QueryResult } from "pg";
import * as database from "../db/tables.js";
import { dataBook, dataBookEntity } from "../protocols/dataBook.js";

function registerNewBook({
  author,
  name,
  year,
  company,
  synopsis,
  bookCover,
  pages,
}: dataBookEntity): Promise<QueryResult<dataBook>> {
  return connection.query(
    `INSERT INTO ${database.TABLE_BOOKS} 
    (author, name, year, company, synopsis, "bookCover", pages) 
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `,
    [author, name, year, company, synopsis, bookCover, pages]
  );
}

function findBookByName(book: string): Promise<QueryResult<dataBook>> {
  return connection.query(
    `SELECT * FROM ${database.TABLE_BOOKS} WHERE name = $1;`,
    [book]
  );
}

function listAllBooks(): Promise<QueryResult<dataBook>> {
  return connection.query(`
    SELECT b.id, 
    ${database.TABLE_AUTHOR}.name as author,
    b.name, b.year, 
    "publishingCompany".name as company,
    b.synopsis, b."bookCover", b.pages
    
    FROM ${database.TABLE_BOOKS} b
    JOIN ${database.TABLE_AUTHOR} ON b.${database.TABLE_AUTHOR} = ${database.TABLE_AUTHOR}.id
    JOIN "publishingCompany" ON b.company = "publishingCompany".id
    ORDER BY ${database.TABLE_AUTHOR}.name
    ;`);
}

export { registerNewBook, findBookByName, listAllBooks };
