import type { BaseService } from "#base/base.service.js";
import type { Request, Response } from "express";

export class BaseController<T extends object> {
  constructor(private service: BaseService<T>) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body as T;
      const createdData = await this.service.create(data);
      res.status(201).json(createdData);
    } catch (error) {
      res.status(500).json({ error: "Failed to create data" });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: `Failed to retrieve data: ${error}` });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      if (typeof id !== "string") {
        res.status(400).json({ error: "Invalid ID" });
        return;
      }
      const data = await this.service.getById(id);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: `Failed to retrieve data ${error}` });
    }
  }

  public async getByEmail(req: Request, res: Response): Promise<void> {
    try {
      const email = req.params.email;
      if (typeof email !== "string") {
        res.status(400).json({ error: "Invalid email" });
        return;
      }
      const data = await this.service.getByEmail(email);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve data" });
    }
  }
}
