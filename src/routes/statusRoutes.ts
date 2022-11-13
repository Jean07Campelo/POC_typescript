import { Router } from "express";
import { showStatus } from "../controllers/getStatusController.js";

const router = Router();

router.get("/status", showStatus);

export default router;
