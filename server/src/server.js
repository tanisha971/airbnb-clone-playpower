const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const listingRoutes = require("./routes/listingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/listings", listingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});