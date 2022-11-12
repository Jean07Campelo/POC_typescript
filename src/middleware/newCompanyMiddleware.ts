import { Request, Response, NextFunction } from "express";
import { newCompanySchema } from "../schemas/companySchema.js";
import { dataCompanyEntity } from "../protocols/dataCompany.js";

function validateCompany(req: Request, res: Response, next: NextFunction) {
  const validationNewCompany = newCompanySchema.validate(
    req.body as dataCompanyEntity,
    {
      abortEarly: false,
    }
  );

  if (validationNewCompany.error) {
    const errors: string[] = validationNewCompany.error.details.map(
      (detail: { message: string }) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export { validateCompany };
