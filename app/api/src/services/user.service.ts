import type { Pool } from "pg";
import {
  userRepository,
  type CreateUserData,
  type User,
} from "../repository/user.repository.js";

export const userService = (db: Pool) => {
  const repository = userRepository(db);

  return {
    async getUserByEmail(email: string): Promise<User | null> {
      return await repository.getUserByEmail(email);
    },

    async getAllUsers(): Promise<User[]> {
      return await repository.getAllUsers();
    },

    async createUser(userData: CreateUserData): Promise<User> {
      return await repository.createUser(userData);
    },
  };
};
