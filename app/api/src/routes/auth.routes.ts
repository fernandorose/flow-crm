import type { AuthController } from "#controllers";
import { AuthMiddleware } from "#middlewares";
import { Router } from "express";

export class AuthRoutes {
  public readonly router: Router;

  constructor(
    private readonly authController: AuthController,
    private readonly authMiddleware: AuthMiddleware,
  ) {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post("/login", (req, res) =>
      this.authController.login(req, res),
    );

    this.router.post("/logout", (req, res) =>
      this.authController.logout(req, res),
    );

    this.router.get(
      "/me",
      this.authMiddleware.authenticate.bind(this.authMiddleware),
      (req, res) => {
        res.status(200).json({
          authenticated: true,
          user: req.user,
        });
      },
    );
  }
}
