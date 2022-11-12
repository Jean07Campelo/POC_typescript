import { Request, Response, NextFunction } from "express";
import { newAuthorSchema } from "../schemas/authorSchema.js";
import { dataAuthorEntity } from "../protocols/dataAuthor.js";

function validateAuthor(req: Request, res: Response, next: NextFunction) {
  const validationNewAuthor = newAuthorSchema.validate(
    req.body as dataAuthorEntity,
    {
      abortEarly: false,
    }
  );

  if (validationNewAuthor.error) {
    const errors: string[] = validationNewAuthor.error.details.map(
      (detail: { message: string }) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export { validateAuthor };
