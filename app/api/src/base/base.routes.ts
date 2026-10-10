import { Router } from "express";
import type { BaseController } from "./base.controller.js";

export class BaseRoutes<T extends object> {
  public router: Router;

  constructor(protected readonly controller: BaseController<T>) {
    this.router = Router();
    this.routes();
  }

  protected routes(): void {
    this.router.post("/", (req, res) => this.controller.create(req, res));
    this.router.get("/", (req, res) => this.controller.getAll(req, res));
    this.router.get("/:id", (req, res) => this.controller.getById(req, res));
  }
}
