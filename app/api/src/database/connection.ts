import { Pool } from "pg";
import { env } from "../config/env.cfg.js";

export const db = new Pool({
  connectionString: env.DATABASE_URL,
});

export const connectDB = async () => {
  try {
    await db.query("SELECT 1");
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
