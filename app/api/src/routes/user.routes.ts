import { Router } from "express";
import { Pool } from "pg";
import { userController } from "../controller/user.controller.js";

export const userRoutes = (db: Pool) => {
  const router = Router();
  const controller = userController(db);

  router.get("/users/:email", controller.getUserByEmail);
  router.get("/users", controller.getAllUsers);
  router.post("/users", controller.createUser);

  return router;
};
