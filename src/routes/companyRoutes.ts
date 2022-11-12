import { Router } from "express";
import {
  registerCompany,
  listCompanies,
} from "../controllers/companyController.js";
import { validateCompany } from "../middleware/newCompanyMiddleware.js";

const router = Router();

router.post("/company", validateCompany, registerCompany);
router.get("/company", listCompanies);

export default router;
