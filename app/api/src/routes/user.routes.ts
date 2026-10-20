import { BaseRoutes } from "#base";
import type { UserController } from "#controllers";
import type { User } from "#interfaces";
import { RoleMiddleware } from "#middlewares";

export class UserRoutes extends BaseRoutes<User> {
  constructor(private readonly userController: UserController) {
    super(userController);
  }

  protected override routes(): void {
    const roleMiddleware = new RoleMiddleware();

    this.router.post("/", roleMiddleware.authorize("admin"), (req, res) =>
      this.userController.createUser(req, res),
    );

    this.router.post("/:userId/company", (req, res) =>
      this.userController.addCompanyToUser(req, res),
    );

    this.router.get("/", (req, res) =>
      this.userController.getAllUsers(req, res),
    );

    this.router.get("/email/:email", (req, res) =>
      this.userController.getUserByEmail(req, res),
    );

    this.router.get("/:id", (req, res) => this.controller.getById(req, res));
  }
}
