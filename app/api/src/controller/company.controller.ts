import type { Pool } from "pg";
import { companyService } from "../services/company.service.js";
import type { Request, Response } from "express";

export const companyController = (db: Pool) => {
  const service = companyService(db);

  return {
    async createCompany(req: Request, res: Response) {
      const { name } = req.body;

      if (typeof name !== "string") {
        res.status(400).json({ message: "Invalid company data" });
        return;
      }

      try {
        const newCompany = await service.createCompany({ name });
        res.status(201).json(newCompany);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
  };
};
