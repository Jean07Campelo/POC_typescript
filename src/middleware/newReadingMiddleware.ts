import { Request, Response, NextFunction } from "express";
import { newReadingSchema } from "../schemas/newReadingSchema.js";
import { newRegisterLibrary } from "../protocols/dataLibrary.js";

function validateNewReading(req: Request, res: Response, next: NextFunction) {
  const validationNewReading = newReadingSchema.validate(
    req.body as newRegisterLibrary,
    {
      abortEarly: false,
    }
  );

  if (validationNewReading.error) {
    const errors: string[] = validationNewReading.error.details.map(
      (detail: { message: string }) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export { validateNewReading };
