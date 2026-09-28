import express from "express";
import cors from "cors";

import listingRoutes from "./src/routes/listingRoutes.js";

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

app.get(
  "/api/health",
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "API is running",
    });
  }
);

app.use(
  "/api/listings",
  listingRoutes
);

app.use(
  (req, res) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
    });
  }
);

export default app;