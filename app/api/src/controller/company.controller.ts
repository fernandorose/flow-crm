import { BaseController } from "#base";
import type { Company } from "#interfaces";
import type { CompanyService } from "#services";
import type { Request, Response } from "express";

export class CompanyController extends BaseController<Company> {
  constructor(service: CompanyService) {
    super(service);
  }

  public async createCompany(req: Request, res: Response): Promise<void> {
    return this.create(req, res);
  }
}
