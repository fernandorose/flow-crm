export interface User {
  id: string;
  company_id: string;
  email: string;
  name: string;
  password: string;
  password_hash: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateUserData = Omit<User, "id" | "created_at" | "updated_at">;
