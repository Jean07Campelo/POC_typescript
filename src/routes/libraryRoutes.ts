import { Router } from "express";
import {
  newReadingRegister,
  updateReading,
} from "../controllers/libraryController.js";
import { validateNewReading } from "../middleware/newReadingMiddleware.js";

const router = Router();

router.post("/newReading", validateNewReading, newReadingRegister);
router.put("/newReading", validateNewReading, updateReading);

export default router;
