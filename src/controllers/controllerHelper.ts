import { Response } from "express";

function serverErrorResponse(res: Response, error: { message: string }) {
  return res.status(500).send(error.message);
}

export { serverErrorResponse };
