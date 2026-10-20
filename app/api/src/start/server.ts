import { connectDB, db } from "#database";
import {
  AuthRoutesFactory,
  CompanyRoutesFactory,
  CustomerRoutesFactory,
  UserRoutesFactory,
} from "#factory";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import http from "node:http";

export class Server {
  private app: Express;
  private server: http.Server;
  private PORT: number;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.PORT = 3000;

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      }),
    );
    this.app.use(cookieParser());
  }

  private routes(): void {
    this.app.use("/api/auth", AuthRoutesFactory.create(db).router);
    this.app.use("/api/users", UserRoutesFactory.create(db).router);
    this.app.use("/api/customers", CustomerRoutesFactory.create(db).router);
    this.app.use("/api/companies", CompanyRoutesFactory.create(db).router);
    this.app.get("/", (_req, res) => {
      res.send("Hello World");
    });
  }

  public async start(): Promise<void> {
    await connectDB();

    this.server.listen(this.PORT, () => {
      console.log(`Server running on port ${this.PORT}`);
    });
  }
}
