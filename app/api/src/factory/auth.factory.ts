import { AuthController } from "#controllers";
import { UserRepository } from "#repository";
import { AuthRoutes } from "#routes";
import { AuthService } from "#services";
import type { Pool } from "pg";

export class AuthRoutesFactory {
  public static create(db: Pool): AuthRoutes {
    const userRepository = new UserRepository(db);
    const authService = new AuthService(userRepository);
    const authController = new AuthController(authService);
    return new AuthRoutes(authController);
  }
}
