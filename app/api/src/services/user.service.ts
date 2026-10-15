import { BaseService } from "#base";
import type { User } from "#interfaces";
import { UserRepository } from "#repository";
import bcrypt from "bcrypt";

export class UserService extends BaseService<User> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return await this.getByEmail(email);
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.getAll();
  }

  public async createUser(userData: User): Promise<User> {
    const passwordHash = await bcrypt.hash(userData.password_hash, 12);
    const { password_hash, ...userFields } = userData;
    const newUser = {
      ...userFields,
      password_hash: passwordHash,
    } as User;
    return this.create(newUser);
  }

  public async addCompanyToUser(
    companyId: string,
    userId: string,
  ): Promise<User | null> {
    return await this.userRepository.addCompanyToUser(companyId, userId);
  }
}
