import { Router } from "express";
import {
  newReadingRegister,
  updateReading,
  deleteReading,
  showPersonalLibrary
} from "../controllers/libraryController.js";
import { validateNewReading } from "../middleware/newReadingMiddleware.js";

const router = Router();

router.post("/newReading", validateNewReading, newReadingRegister);
router.put("/newReading", validateNewReading, updateReading);
router.delete("/deleteReading/:id", deleteReading);
router.get("/mylibrary", showPersonalLibrary);

export default router;
