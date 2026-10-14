import { connectDB, db } from "#database";
import { CompanyRoutesFactory, UserRoutesFactory } from "#factory";
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
  }

  private routes(): void {
    this.app.use("/api/users", UserRoutesFactory.create(db).router);
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
