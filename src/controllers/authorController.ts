import { Request, Response } from "express";
import { dataAuthorEntity } from "../protocols/dataAuthor.js";
import {
  registerNewAuthor,
  getAuthorByName,
  getAllAuthors,
} from "../repositories/authorRepository.js";
import { serverErrorResponse } from "./controllerHelper.js";

async function registerAuthor(req: Request, res: Response) {
  const { name } = req.body as dataAuthorEntity;

  try {
    const authorRegistered = await getAuthorByName(name);

    if (authorRegistered.rowCount) {
      const { id } = authorRegistered.rows[0];
      return res.send(`Author is registered by id ${id}`);
    }

    const newAuthor = await registerNewAuthor(name);
    if (newAuthor.rowCount) {
      return res.status(201).send(`Author ${name} is successfully registered`);
    }
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function listAuthors(req: Request, res: Response) {
  try {
    const allAuthors = await getAllAuthors();
    return res.status(200).send(allAuthors.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { registerAuthor, listAuthors };
