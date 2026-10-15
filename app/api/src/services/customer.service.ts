import { BaseService } from "#base";
import type { Customer } from "#interfaces";
import type { CustomerRepository } from "#repository/customer.repository.js";

export class CustomerService extends BaseService<Customer> {
  constructor(private readonly customerRepository: CustomerRepository) {
    super(customerRepository);
  }

  public async getCustomerByEmail(email: string): Promise<Customer | null> {
    return await this.getByEmail(email);
  }

  public async getAllCustomers(): Promise<Customer[]> {
    return await this.getAll();
  }

  public async createCustomer(customerData: Customer): Promise<Customer> {
    return await this.create(customerData);
  }

  public async updateCustomer(
    id: string,
    customerData: Customer,
  ): Promise<Customer | null> {
    return await this.update(id, customerData);
  }
}
