import { BaseRepository } from "#base";
import type { Company } from "#interfaces";
import { Pool } from "pg";

export class CompanyRepository extends BaseRepository<Company> {
  constructor(db: Pool) {
    super(db, "companies");
  }

  public async createCompany(companyData: Company): Promise<Company> {
    return this.create(companyData);
  }
}
