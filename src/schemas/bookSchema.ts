import joi from "joi";
import { dataBookEntity } from "../protocols/dataBook.js";

const bookSchema: joi.ObjectSchema<dataBookEntity> = joi.object({
  author: joi.number().required(),
  name: joi.string().required().min(1).max(50),
  year: joi.number().required(),
  company: joi.number().required(),
  synopsis: joi.string().min(1).max(300),
  bookCover: joi.string(),
  pages: joi.number().required(),
});

export { bookSchema };
