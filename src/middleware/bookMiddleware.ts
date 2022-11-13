import { Request, Response, NextFunction } from "express";
import { bookSchema } from "../schemas/bookSchema.js";
import { dataBookEntity } from "../protocols/dataBook.js";

function validateBook(req: Request, res: Response, next: NextFunction) {
  const validationNewBook = bookSchema.validate(req.body as dataBookEntity, {
    abortEarly: false,
  });

  if (validationNewBook.error) {
    const errors: string[] = validationNewBook.error.details.map(
      (detail: { message: string }) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export { validateBook };
