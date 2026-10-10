import { BaseRoutes } from "../base/base.routes.js";
import { UserController } from "../controller/user.controller.js";
import type { User } from "../interfaces/user.interface.js";

export class UserRoutes extends BaseRoutes<User> {
  constructor(controller: UserController) {
    super(controller);
  }

  protected override routes(): void {
    super.routes();

    this.router.get("/users/:email", (req, res) =>
      this.controller.getByEmail(req, res),
    );
    this.router.get("/users", (req, res) => this.controller.getAll(req, res));
    this.router.post("/users", (req, res) => this.controller.create(req, res));
  }
}
