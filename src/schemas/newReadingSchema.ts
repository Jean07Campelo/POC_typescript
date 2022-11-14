import joi from "joi";
import { newRegisterLibrary } from "../protocols/dataLibrary.js";

const newReadingSchema: joi.ObjectSchema<newRegisterLibrary> = joi.object({
  book: joi.number().required(),
  status: joi.number().required(),
});

export { newReadingSchema };
