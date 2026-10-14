import { BaseService } from "#base";
import type { User } from "#interfaces";
import type { UserRepository } from "#repository";

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
