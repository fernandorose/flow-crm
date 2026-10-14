import { BaseController } from "#base";
import type { User } from "#interfaces";
import type { UserService } from "#services";
import type { Request, Response } from "express";

export class UserController extends BaseController<User> {
  constructor(service: UserService) {
    super(service);
  }

  public async getUserByEmail(req: Request, res: Response): Promise<void> {
    return this.getByEmail(req, res);
  }

  public async getAllUsers(req: Request, res: Response): Promise<void> {
    return this.getAll(req, res);
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    return this.create(req, res);
  }
}
