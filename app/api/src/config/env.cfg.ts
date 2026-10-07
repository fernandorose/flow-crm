import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env");

if (!fs.existsSync(envPath)) {
  throw new Error(`❌ .env no encontrado en: ${envPath}`);
}

process.loadEnvFile(envPath);

export const requiredEnv = (name: string): string => {
  const value = process.env[name];

  if (value === undefined) {
    throw new Error(`❌ Missing env var: ${name}`);
  }

  return value;
};

export const optionalEnv = (name: string): string | undefined => {
  return process.env[name];
};

export const env = {
  DATABASE_URL: requiredEnv("DATABASE_URL"),
};
