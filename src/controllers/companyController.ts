import { Request, Response } from "express";
import { dataCompanyEntity } from "../protocols/dataCompany.js";
import { serverErrorResponse } from "./controllerHelper.js";
import {
  getCompanyByName,
  registerNewCompany,
  getCompanies,
} from "../repositories/companyRepository.js";

async function registerCompany(req: Request, res: Response) {
  const { name } = req.body as dataCompanyEntity;

  try {
    const companyRegistered = await getCompanyByName(name);
    if (companyRegistered.rowCount) {
      const { id } = companyRegistered.rows[0];
      return res
        .status(400)
        .send(`The Company ${name} is registered by ID: ${id}`);
    }

    const newCompany = await registerNewCompany(name);
    if (newCompany.rowCount) {
      return res.status(201).send(`Company ${name} is successfully registered`);
    }
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

async function listCompanies(req: Request, res: Response) {
  try {
    const allCompanies = await getCompanies();
    return res.status(200).send(allCompanies.rows);
  } catch (error) {
    serverErrorResponse(res, error);
  }
}

export { registerCompany, listCompanies };
