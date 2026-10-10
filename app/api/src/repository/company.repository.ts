import { Pool } from "pg";
import { BaseRepository } from "../base/base.repository.js";
import type { Company } from "../interfaces/company.interface.js";

export class CompanyRepository extends BaseRepository<Company> {
  constructor(db: Pool) {
    super(db, "companies");
  }

  public async createCompany(companyData: Company): Promise<Company> {
    return this.create(companyData);
  }
}
