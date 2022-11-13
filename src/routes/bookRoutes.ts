import { Router } from "express";
import { registerBook, getBooks } from "../controllers/bookController.js";
import { validateBook } from "../middleware/bookMiddleware.js";

const router = Router();

router.post("/books", validateBook, registerBook);
router.get("/books", getBooks);

export default router;