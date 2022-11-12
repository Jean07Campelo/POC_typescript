import joi from "joi";
import { DataUserEntity } from "../protocols/dataUser.js";

const newUserSchema: joi.ObjectSchema<DataUserEntity> = joi.object({
  username: joi.string().required().min(1),
  email: joi.string().email(),
  password: joi.string().required().min(6),
});

export { newUserSchema };
