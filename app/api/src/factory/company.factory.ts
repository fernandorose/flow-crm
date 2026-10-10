import type { Pool } from "pg";
import { CompanyController } from "../controller/company.controller.js";
import { CompanyRepository } from "../repository/company.repository.js";
import { CompanyRoutes } from "../routes/company.routes.js";
import { CompanyService } from "../services/company.service.js";

export class CompanyRoutesFactory {
  static create(db: Pool): CompanyRoutes {
    const repository = new CompanyRepository(db);
    const service = new CompanyService(repository);
    const controller = new CompanyController(service);
    return new CompanyRoutes(controller);
  }
}
