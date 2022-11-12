import joi from "joi";
import { dataUserEntity } from "../protocols/dataUser.js";

const newUserSchema: joi.ObjectSchema<dataUserEntity> = joi.object({
  username: joi.string().required().min(1),
  email: joi.string().email(),
  password: joi.string().required().min(6),
});

export { newUserSchema };
