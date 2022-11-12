import { Router } from "express";
import { signUp } from "../controllers/userController.js";
import { validateSignUp } from "../middleware/newUserMiddleware.js";

const router = Router();

router.post("/signup", validateSignUp, signUp);

export default router;
