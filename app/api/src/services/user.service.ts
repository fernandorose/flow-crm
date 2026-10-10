import { BaseService } from "../base/base.service.js";
import type { User } from "../interfaces/user.interface.js";
import { UserRepository } from "../repository/user.repository.js";

export class UserService extends BaseService<User> {
  constructor(repository: UserRepository) {
    super(repository);
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return await this.getByEmail(email);
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.getAll();
  }

  public async createUser(userData: User): Promise<User> {
    return await this.create(userData);
  }
}
