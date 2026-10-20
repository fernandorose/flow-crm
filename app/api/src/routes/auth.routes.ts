import type { AuthController } from "#controllers";
import { Router } from "express";

export class AuthRoutes {
  public readonly router: Router;

  constructor(private readonly authController: AuthController) {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post("/login", (req, res) =>
      this.authController.login(req, res),
    );
  }
}
