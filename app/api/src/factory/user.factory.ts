import type { Pool } from "pg";
import { UserController } from "../controller/user.controller.js";
import { UserRepository } from "../repository/user.repository.js";
import { UserRoutes } from "../routes/user.routes.js";
import { UserService } from "../services/user.service.js";

export class UserRoutesFactory {
  static create(db: Pool): UserRoutes {
    const repository = new UserRepository(db);
    const service = new UserService(repository);
    const controller = new UserController(service);
    return new UserRoutes(controller);
  }
}
