import http from "http";
import express from "express";
import { userRoutes } from "./routes/user.routes.js";
import { connectDB, db } from "./database/connection.js";
import { companyRoutes } from "./routes/company.routes.js";

export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

const app = express();

app.use(express.json());
app.use("/api", userRoutes(db));
app.use("/api", companyRoutes(db));
app.use("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
