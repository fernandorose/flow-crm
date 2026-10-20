import { env } from "#config";
import type { UserRepository } from "#repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  public async login(
    email: string,
    password: string,
  ): Promise<{ token: string }> {
    const user = await this.userRepository.getByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatches) {
      throw new Error("Invalid credentials");
    }

    const secret = env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      {
        userId: user.id,
        companyId: user.company_id,
        role: user.role,
      },
      secret,
      {
        algorithm: "HS256",
        expiresIn: "1h",
      },
    );

    return { token };
  }
}
