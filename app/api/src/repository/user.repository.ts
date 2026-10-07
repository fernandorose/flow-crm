import { Pool } from "pg";

export type User = {
  id: string;
  company_id: string;
  email: string;
  name: string;
  password_hash: string;
  role: string;
  created_at: Date;
  updated_at: Date;
};

export type CreateUserData = Omit<User, "id" | "created_at" | "updated_at">;

export const userRepository = (db: Pool) => ({
  async createUser(userData: CreateUserData): Promise<User> {
    const query = `
        INSERT INTO users (
        id, 
        company_id, 
        name, 
        email, 
        password_hash, 
        role
        ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;
    const values = [
      userData.company_id,
      userData.name,
      userData.email,
      userData.password_hash,
      userData.role,
    ];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  async getUserByEmail(email: string): Promise<User | null> {
    const query = `SELECT * FROM users WHERE email = $1;`;
    const result = await db.query(query, [email]);
    return result.rows[0] || null;
  },

  async getAllUsers(): Promise<User[]> {
    const query = `SELECT * FROM users;`;
    const result = await db.query(query);
    return result.rows;
  },
});
