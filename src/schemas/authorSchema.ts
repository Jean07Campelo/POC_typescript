import joi from "joi";
import { dataAuthorEntity } from "../protocols/dataAuthor.js";

const newAuthorSchema: joi.ObjectSchema<dataAuthorEntity> = joi.object({
  name: joi.string().required().min(1).max(50),
});

export { newAuthorSchema };
