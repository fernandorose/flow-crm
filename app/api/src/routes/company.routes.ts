import { BaseRoutes } from "#base";
import type { CompanyController } from "#controllers";
import type { Company } from "#interfaces";

export class CompanyRoutes extends BaseRoutes<Company> {
  constructor(private readonly companyController: CompanyController) {
    super(companyController);
  }

  protected override routes(): void {
    super.routes();

    this.router.post("/companies", (req, res) =>
      this.companyController.create(req, res),
    );

    this.router.get("/:companyId/data", (req, res) =>
      this.companyController.getCompanyData(req, res),
    );
  }
}
