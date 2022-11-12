import { Request, Response, NextFunction } from "express";
import { newUserSchema } from "../schemas/userSchema.js";
import { dataUserEntity } from "../protocols/dataUser.js";

function validateSignUp(req: Request, res: Response, next: NextFunction) {
  const validationNewUser = newUserSchema.validate(req.body as dataUserEntity, {
    abortEarly: false,
  });

  if (validationNewUser.error) {
    const errors: string[] = validationNewUser.error.details.map(
      (detail: { message: string }) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export { validateSignUp };
