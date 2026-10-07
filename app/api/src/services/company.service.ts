import type { Pool } from "pg";
import { companyRepository } from "../repository/company.repository.js";

export const companyService = (db: Pool) => {
  const repository = companyRepository(db);

  return {
    async createCompany(companyData: { name: string }) {
      return await repository.createCompany(companyData);
    },
  };
};
