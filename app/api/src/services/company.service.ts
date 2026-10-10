import { BaseService } from "../base/base.service.js";
import type { Company } from "../interfaces/company.interface.js";
import { CompanyRepository } from "../repository/company.repository.js";

export class CompanyService extends BaseService<Company> {
  constructor(repository: CompanyRepository) {
    super(repository);
  }

  public async createCompany(companyData: Company) {
    return await this.create(companyData);
  }
}
