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

  public async getUserByEmail(email: string): Promise<User | null> {
    return this.getByEmail(email);
  }

  public async getAllUsers(): Promise<User[]> {
    return this.getAll();
  }

  public async addCompanyToUser(companyId: string, userId: string) {
    const query = `UPDATE users
                   SET company_id = $1
                   WHERE id = $2
                   RETURNING *;`;
    const result = await this.db.query(query, [companyId, userId]);
    return result.rows[0] ?? null;
  }
}
