import { Request, Response } from "express";
import { serverErrorResponse } from "./controllerHelper.js";
import { newRegisterLibrary } from "../protocols/dataLibrary.js";
import { registers } from "../repositories/userRepository.js";
import {
  registerNewReading,
  checkReading,
  updateReadingRegister,
  deleteReadingRegister,
} from "../repositories/libraryRepository.js";

async function newReadingRegister(req: Request, res: Response) {
  const { book, status } = req.body as newRegisterLibrary;
  const emailUser = req.headers.authorization;

  try {
    const userIsValid = await registers(emailUser);
    const userId = userIsValid.rows[0].id;
    const newReadingSaved = await registerNewReading({ book, status, userId });
    if (newReadingSaved.rowCount) {
      return res.sendStatus(201);
    }
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function updateReading(req: Request, res: Response) {
  const { book, status } = req.body as newRegisterLibrary;
  const emailUser = req.headers.authorization;

  try {
    const userIsValid = await registers(emailUser);
    const userId = userIsValid.rows[0].id;

    //check register
    const readingIsValid = await checkReading({ book, userId });
    if (readingIsValid.rowCount === 0) {
      return res.status(404).send(`Don't exists register!`);
    }

    //update register
    const { id } = readingIsValid.rows[0];
    const successfullyUpdated = await updateReadingRegister({ status, id });
    if (successfullyUpdated.rowCount) {
      return res.sendStatus(200);
    }
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function deleteReading(req: Request, res: Response) {
  const id = Number(req.params.id);
  const emailUser = req.headers.authorization;

  try {
    const userIsValid = await registers(emailUser);
    const userId = userIsValid.rows[0].id;
    const successfullyDeleted = await deleteReadingRegister({ id, userId });
    if (successfullyDeleted.rowCount === 0) {
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { newReadingRegister, updateReading, deleteReading };
