import { BaseService } from "#base";
import type { Company } from "#interfaces";
import type { CompanyRepository } from "#repository";

export class CompanyService extends BaseService<Company> {
  constructor(private readonly companyRepository: CompanyRepository) {
    super(companyRepository);
  }

  public async createCompany(companyData: Company) {
    return this.create(companyData);
  }

  public async getCompanyData(companyId: string) {
    return this.companyRepository.getCompanyData(companyId);
  }
}
