import http from "http";
import express from "express";
import { userRoutes } from "./routes/user.routes.js";
import { connectDB, db } from "./database/connection.js";

export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

const app = express();

app.use(express.json());
app.use("/api", userRoutes(db));

const PORT = 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
