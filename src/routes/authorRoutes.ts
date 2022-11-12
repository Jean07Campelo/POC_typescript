import { Router } from "express";
import { registerAuthor, listAuthors } from "../controllers/authorController.js";
import { validateAuthor } from "../middleware/newAuthorMiddleware.js";

const router = Router();

router.post("/author", validateAuthor, registerAuthor);
router.get("/author", listAuthors);

export default router;
