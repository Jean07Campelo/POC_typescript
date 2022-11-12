import { Request, Response } from "express";
import { registerNewUser, registers } from "../repositories/userRepository.js";
import { serverErrorResponse } from "./controllerHelper.js";
import { DataUserEntity } from "../protocols/dataUser.js";

//check if user is registered and register new user
async function signUp(req: Request, res: Response) {
  const { username, email, password } = req.body as DataUserEntity;

  const userRegistered = (await registers(email)).rowCount;
  if (userRegistered) {
    return res.status(400).send(`${email} is registered`);
  }

  try {
    await registerNewUser({ username, email, password });
    return res.sendStatus(201);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { signUp };
