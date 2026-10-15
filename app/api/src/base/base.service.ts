interface Repository<T extends object> {
  update(id: string, data: Partial<T>): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  getByEmail(email: string): Promise<T | null>;
}

export class BaseService<T extends object> {
  constructor(protected repository: Repository<T>) {}

  public async create(data: T): Promise<T> {
    return this.repository.create(data);
  }

  public async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.repository.update(id, data);
  }

  public async getAll(): Promise<T[]> {
    return this.repository.getAll();
  }

  public async getById(id: string): Promise<T | null> {
    return this.repository.getById(id);
  }

  public async getByEmail(email: string): Promise<T | null> {
    return this.repository.getByEmail(email);
  }
}
