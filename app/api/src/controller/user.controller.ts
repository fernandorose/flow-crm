import type { Pool } from "pg";
import { userService } from "../services/user.service.js";
import type { Request, Response } from "express";

export const userController = (db: Pool) => {
  const service = userService(db);

  return {
    async getUserByEmail(req: Request, res: Response) {
      const { email } = req.params;
      if (typeof email !== "string") {
        res.status(400).json({ message: "Invalid email" });
        return;
      }
      try {
        const user = await service.getUserByEmail(email);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },

    async getAllUsers(req: Request, res: Response) {
      try {
        const users = await service.getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    },
  };
};
