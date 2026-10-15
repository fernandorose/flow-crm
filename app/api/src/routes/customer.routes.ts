import { BaseRoutes } from "#base";
import type { CustomerController } from "#controller/customer.controller.js";
import type { Customer } from "#interfaces";

export class CustomerRoutes extends BaseRoutes<Customer> {
  constructor(private readonly customerController: CustomerController) {
    super(customerController);
  }

  protected override routes(): void {
    this.router.post("/", (req, res) =>
      this.customerController.createCustomer(req, res),
    );

    this.router.get("/", (req, res) =>
      this.customerController.getAllCustomers(req, res),
    );

    this.router.get("/email/:email", (req, res) =>
      this.customerController.getCustomerByEmail(req, res),
    );

    this.router.get("/:id", (req, res) => this.controller.getById(req, res));
  }
}
