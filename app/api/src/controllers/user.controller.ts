import { BaseController } from "#base";
import type { User } from "#interfaces";
import type { UserService } from "#services";
import type { Request, Response } from "express";

export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  public async getUserByEmail(req: Request, res: Response): Promise<void> {
    return this.getByEmail(req, res);
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    return this.getAll(req, res);
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const createdUser = await this.userService.createUser(req.body);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  public async addCompanyToUser(req: Request, res: Response): Promise<void> {
    try {
      const { companyId } = req.body;
      const { userId } = req.params;
      if (typeof userId !== "string") {
        res.status(400).json({ error: "Invalid user ID" });
        return;
      }
      const user = await this.userService.addCompanyToUser(companyId, userId);

      if (!user) {
        res.status(404).json({
          error: "User not found",
        });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      console.error("Error assigning company to user:", error);

      res.status(500).json({
        error: "Failed to assign company to user",
      });
    }
  }
}
