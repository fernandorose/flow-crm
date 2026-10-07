import { Pool } from "pg";

export type Company = {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
};

export type CreateCompanyData = Omit<
  Company,
  "id" | "created_at" | "updated_at"
>;

export const companyRepository = (db: Pool) => ({
  async createCompany(companyData: CreateCompanyData): Promise<Company> {
    const query = `
            INSERT INTO companies (
                name
            ) VALUES ($1) RETURNING *;`;
    const values = [companyData.name];
    const result = await db.query(query, values);
    return result.rows[0];
  },
});
