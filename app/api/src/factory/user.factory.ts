import { UserRepository } from "#repository";
import { UserRoutes } from "#routes";
import { UserService } from "#services";
import type { Pool } from "pg";
import { UserController } from "../controllers/index.js";

export class UserRoutesFactory {
  static create(db: Pool): UserRoutes {
    const repository = new UserRepository(db);
    const service = new UserService(repository);
    const controller = new UserController(service);
    return new UserRoutes(controller);
  }
}
