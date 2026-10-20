import { env } from "#config";
import type { AuthPayload } from "#interfaces";
import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export class AuthMiddleware {
  public authenticate(req: Request, res: Response, next: NextFunction): void {
    const token = req.cookies?.access_token;
    const secret = env.JWT_SECRET;

    if (!token) {
      res.status(401).json({
        error: "Authentication token required",
      });
      return;
    }

    if (!secret) {
      res.status(500).json({
        error: "Authentication configuration error",
      });
      return;
    }

    try {
      const decoded = jwt.verify(token, secret, {
        algorithms: ["HS256"],
      });

      if (typeof decoded === "string") {
        res.status(401).json({
          error: "Invalid token payload",
        });
        return;
      }

      const payload = decoded as JwtPayload;

      if (
        typeof payload.userId !== "string" ||
        typeof payload.role !== "string" ||
        !(typeof payload.companyId === "string" || payload.companyId === null)
      ) {
        res.status(401).json({
          error: "Invalid token payload",
        });
        return;
      }

      req.user = {
        userId: payload.userId,
        companyId: payload.companyId,
        role: payload.role,
      } satisfies AuthPayload;

      next();
    } catch {
      res.status(401).json({
        error: "Invalid or expired token",
      });
    }
  }
}

export class RoleMiddleware {
  public authorize(...allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
      // req.user debe ser establecido por el middleware
      // de autenticación después de validar la identidad.

      const user = (req as any).user;

      if (!user || !allowedRoles.includes(user.role)) {
        res.status(403).json({
          error: "Forbidden",
        });
        return;
      }

      next();
    };
  }
}
