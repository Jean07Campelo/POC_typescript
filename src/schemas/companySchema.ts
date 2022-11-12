import joi from "joi";
import { dataCompanyEntity } from "../protocols/dataCompany";

const newCompanySchema: joi.ObjectSchema<dataCompanyEntity> = joi.object({
  name: joi.string().required().min(1).max(50),
});

export { newCompanySchema };
