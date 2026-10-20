import type { AuthService } from "#services";
import type { Request, Response } from "express";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const { token } = await this.authService.login(email, password);
      if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        !email.trim() ||
        !password
      ) {
        res.status(400).json({
          error: "Email and password are required",
        });
        return;
      }

      const result = await this.authService.login(email.trim(), password);
      res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 1000,
        path: "/",
      });
      res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error && error.message === "Invalid credentials") {
        res.status(401).json({
          error: "Invalid email or password",
        });
        return;
      }

      console.error("Login error:", error);

      res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  public logout(req: Request, res: Response): void {
    res.clearCookie("access_token", {
      httpOnly: true,
      // secure: env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    res.status(200).json({
      message: "Logged out successfully",
    });
  }
}
