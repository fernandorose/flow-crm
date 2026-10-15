import { BaseController } from "#base";
import type { Customer } from "#interfaces";
import type { CustomerService } from "#services/customer.service.js";
import type { Request, Response } from "express";

export class CustomerController extends BaseController<Customer> {
  constructor(private readonly customerService: CustomerService) {
    super(customerService);
  }

  public async createCustomer(req: Request, res: Response): Promise<void> {
    return this.create(req, res);
  }

  public async getCustomerByEmail(req: Request, res: Response): Promise<void> {
    return this.getByEmail(req, res);
  }

  public async getAllCustomers(req: Request, res: Response): Promise<void> {
    return this.getAll(req, res);
  }

  public async updateCustomer(req: Request, res: Response): Promise<void> {
    return this.update(req, res);
  }
}
