import { Router } from "express";
import { companyController } from "../controller/company.controller.js";
import type { Pool } from "pg";

export const companyRoutes = (db: Pool) => {
  const router = Router();
  const controller = companyController(db);

  router.post("/companies", controller.createCompany);

  return router;
};
