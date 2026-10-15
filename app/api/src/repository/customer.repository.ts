import { BaseRepository } from "#base";
import type { Customer } from "#interfaces/customer.interface.js";
import { Pool } from "pg";

export class CustomerRepository extends BaseRepository<Customer> {
  constructor(db: Pool) {
    super(db, "customers");
  }

  public async createCustomer(customerData: Customer): Promise<Customer> {
    return this.create(customerData);
  }

  public async getCustomerByEmail(email: string): Promise<Customer | null> {
    return this.getByEmail(email);
  }

  public async getAllCustomers(): Promise<Customer[]> {
    return this.getAll();
  }
}
