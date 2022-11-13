import { Request, Response } from "express";
import { getStatus } from "../repositories/getStatusRepository.js";
import { serverErrorResponse } from "./controllerHelper.js";

async function showStatus(req: Request, res: Response) {
  try {
    const status = await getStatus();
    res.status(200).send(status.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { showStatus };
