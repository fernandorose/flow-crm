import { Pool } from "pg";
import { BaseRepository } from "../base/base.repository.js";
import type { User } from "../interfaces/user.interface.js";

export class UserRepository extends BaseRepository<User> {
  constructor(db: Pool) {
    super(db, "users");
  }

  public async createUser(userData: User): Promise<User> {
    return this.create(userData);
  }

  public getUserByEmail(email: string): Promise<User | null> {
    return this.getByEmail(email);
  }

  public getAllUsers(): Promise<User[]> {
    return this.getAll();
  }
}
