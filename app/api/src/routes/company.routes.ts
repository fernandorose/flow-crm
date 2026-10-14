import { BaseRoutes } from "#base";
import type { CompanyController } from "#controller";
import type { Company } from "#interfaces";

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
