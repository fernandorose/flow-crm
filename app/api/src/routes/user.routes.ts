import { BaseRoutes } from "#base";
import type { UserController } from "#controller";
import type { User } from "#interfaces";

export class UserRoutes extends BaseRoutes<User> {
  constructor(private readonly userController: UserController) {
    super(userController);
  }

  protected override routes(): void {
    this.router.post("/", (req, res) =>
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
