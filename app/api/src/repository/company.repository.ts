import { BaseRepository } from "#base";
import type { Company } from "#interfaces";
import { Pool } from "pg";

export class CompanyRepository extends BaseRepository<Company> {
  constructor(db: Pool) {
    super(db, "companies");
  }

  public async createCompany(companyData: Company): Promise<Company> {
    return this.create(companyData);
  }

  public async getCompanyData(companyId: string) {
    const companyQuery = `
    SELECT *
    FROM companies
    WHERE id = $1;
  `;
    const usersQuery = `
    SELECT *
    FROM users
    WHERE company_id = $1;
  `;
    const customersQuery = `
    SELECT *
    FROM customers
    WHERE company_id = $1;
  `;
    const leadsQuery = `
    SELECT *
    FROM leads
    WHERE company_id = $1;
  `;
    const productsQuery = `
    SELECT *
    FROM products
    WHERE company_id = $1;
  `;
    const quotesQuery = `
    SELECT *
    FROM quotes
    WHERE company_id = $1;
  `;
    const company = await this.db.query(companyQuery, [companyId]);
    if (company.rows.length === 0) return null;
    const users = await this.db.query(usersQuery, [companyId]);
    const customers = await this.db.query(customersQuery, [companyId]);
    const leads = await this.db.query(leadsQuery, [companyId]);
    const products = await this.db.query(productsQuery, [companyId]);
    const quotes = await this.db.query(quotesQuery, [companyId]);
    return {
      ...company.rows[0],
      users: users.rows,
      customers: customers.rows,
      leads: leads.rows,
      products: products.rows,
      quotes: quotes.rows,
    };
  }
}
