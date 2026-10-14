import { BaseRoutes } from "#base";
import type { UserController } from "#controller";
import type { User } from "#interfaces";

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
