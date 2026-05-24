import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/error.middleware.js";
import connectDB from "./config/db.js";
import authRoutes
from "./routes/auth.routes.js";
import requestIdMiddleware from "./middlewares/requestId.middleware.js";
import { env } from "./config/env.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(requestIdMiddleware);

app.use(loggerMiddleware);

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server running"
  });
});

const PORT = env.PORT;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
app.use(
  "/api/v1/auth",
  authRoutes
);
app.use(errorMiddleware)