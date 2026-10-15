import { BaseController } from "#base";
import type { Company } from "#interfaces";
import type { CompanyService } from "#services";
import type { Request, Response } from "express";

export class CompanyController extends BaseController<Company> {
  constructor(private readonly companyService: CompanyService) {
    super(companyService);
  }

  public async createCompany(req: Request, res: Response): Promise<void> {
    return this.create(req, res);
  }

  public async getCompanyData(req: Request, res: Response): Promise<void> {
    try {
      const { companyId } = req.params;
      if (typeof companyId !== "string") {
        res.status(400).json({
          message: "Invalid company ID",
        });
        return;
      }
      const companyData = await this.companyService.getCompanyData(companyId);
      if (!companyData) {
        res.status(404).json({
          message: "Company not found",
        });
        return;
      }

      res.status(200).json(companyData);
    } catch (error) {
      console.error("Error retrieving company data:", error);

      res.status(500).json({
        message: "Error retrieving company data",
      });
    }
  }
}
