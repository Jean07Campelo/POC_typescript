import { Request, Response } from "express";
import { dataBookEntity } from "../protocols/dataBook.js";
import { serverErrorResponse } from "./controllerHelper.js";
import {
  registerNewBook,
  findBookByName,
  listAllBooks,
} from "../repositories/bookRepository.js";

async function registerBook(req: Request, res: Response) {
  const { author, name, year, company, synopsis, bookCover, pages } =
    req.body as dataBookEntity;

  try {
    const bookExists = await findBookByName(name);
    if (bookExists.rowCount) {
      const { id } = bookExists.rows[0];
      return res.status(400).send(`The book exists by ID: ${id}`);
    }

    const bookRegistered = await registerNewBook({
      author,
      name,
      year,
      company,
      synopsis,
      bookCover,
      pages,
    });

    if (bookRegistered.rowCount) {
      return res
        .status(201)
        .send(`The book "${name}" is successfully registered!`);
    }
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function getBooks(req: Request, res: Response) {
  try {
    const books = await listAllBooks();
    res.status(200).send(books.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { registerBook, getBooks };
