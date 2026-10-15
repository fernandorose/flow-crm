import type { Pool } from "pg";

export class BaseRepository<T extends object> {
  constructor(
    protected db: Pool,
    private tableName: string,
  ) {}

  public async create(data: T): Promise<T> {
    const columns = Object.keys(data).join(", ");
    const placeholders = Object.keys(data)
      .map((_, index) => `$${index + 1}`)
      .join(", ");
    const values = Object.values(data);

    const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *;`;
    const result = await this.db.query(query, values);
    return result.rows[0];
  }

  public async update(id: string, data: Partial<T>): Promise<T | null> {
    const entries = Object.entries(data);

    if (entries.length === 0) {
      return this.getById(id);
    }

    const setClause = entries
      .map(([column], index) => `${column} = $${index + 1}`)
      .join(", ");

    const values = entries.map(([, value]) => value);

    const query = `
    UPDATE ${this.tableName}
    SET ${setClause}, updated_at = NOW()
    WHERE id = $${values.length + 1}
    RETURNING *;
  `;

    const result = await this.db.query(query, [...values, id]);

    return result.rows[0] ?? null;
  }

  public async getAll(): Promise<T[]> {
    const query = `SELECT * FROM ${this.tableName};`;
    const result = await this.db.query(query);
    return result.rows;
  }

  public async getById(id: string): Promise<T | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1;`;
    const result = await this.db.query(query, [id]);
    return result.rows[0] || null;
  }

  public async getByEmail(email: string): Promise<T | null> {
    const query = `SELECT * FROM ${this.tableName} WHERE email = $1;`;
    const result = await this.db.query(query, [email]);
    return result.rows[0] || null;
  }

  public async getAllByCompanyId(companyId: string): Promise<T[]> {
    const query = `
    SELECT *
    FROM ${this.tableName}
    WHERE company_id = $1;
  `;

    const result = await this.db.query(query, [companyId]);

    return result.rows;
  }
}
