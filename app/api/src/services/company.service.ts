import { BaseService } from "#base";
import type { Company } from "#interfaces";
import type { CompanyRepository } from "#repository";

export class CompanyService extends BaseService<Company> {
  constructor(repository: CompanyRepository) {
    super(repository);
  }

  public async createCompany(companyData: Company) {
    return await this.create(companyData);
  }
}
