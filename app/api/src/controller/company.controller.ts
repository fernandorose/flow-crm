import type { Request, Response } from "express";
import { BaseController } from "../base/base.controller.js";
import type { Company } from "../interfaces/company.interface.js";
import type { CompanyService } from "../services/company.service.js";

export class CompanyController extends BaseController<Company> {
  constructor(service: CompanyService) {
    super(service);
  }

  public async createCompany(req: Request, res: Response): Promise<void> {
    return this.create(req, res);
  }
}
