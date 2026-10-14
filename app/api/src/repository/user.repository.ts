import { BaseRepository } from "#base";
import type { User } from "#interfaces";
import { Pool } from "pg";

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
