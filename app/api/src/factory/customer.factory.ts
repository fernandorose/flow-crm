import { CustomerRepository } from "#repository";
import { CustomerRoutes } from "#routes";
import { CustomerService } from "#services";
import type { Pool } from "pg";
import { CustomerController } from "../controllers/index.js";

export class CustomerRoutesFactory {
  static create(db: Pool): CustomerRoutes {
    const repository = new CustomerRepository(db);
    const service = new CustomerService(repository);
    const controller = new CustomerController(service);
    return new CustomerRoutes(controller);
  }
}
