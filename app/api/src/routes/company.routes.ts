import { BaseRoutes } from "../base/base.routes.js";
import { CompanyController } from "../controller/company.controller.js";
import type { Company } from "../interfaces/company.interface.js";

export class CompanyRoutes extends BaseRoutes<Company> {
  constructor(controller: CompanyController) {
    super(controller);
  }

  protected override routes(): void {
    super.routes();

    this.router.post("/companies", (req, res) =>
      this.controller.create(req, res),
    );
  }
}
