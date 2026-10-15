import { CompanyRepository } from "#repository";
import { CompanyRoutes } from "#routes";
import { CompanyService } from "#services";
import type { Pool } from "pg";
import { CompanyController } from "../controllers/index.js";

export class CompanyRoutesFactory {
  static create(db: Pool): CompanyRoutes {
    const repository = new CompanyRepository(db);
    const service = new CompanyService(repository);
    const controller = new CompanyController(service);
    return new CompanyRoutes(controller);
  }
}
