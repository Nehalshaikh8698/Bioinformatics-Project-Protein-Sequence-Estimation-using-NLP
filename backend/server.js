// ===========================
// ✅ SERVER.JS (CLEAN & FIXED)
// ===========================

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ---------------------------
// ✅ MIDDLEWARE
// ---------------------------
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------------------
// ✅ ROUTE IMPORTS
// ---------------------------
const modelRoutes = require("./routes/models");

// ⚠️ Comment out until implemented
// const analyzeRoutes = require("./routes/analyze");
// const authRoutes = require("./routes/auth");
// const batchRoutes = require("./routes/batch");

// ---------------------------
// ✅ ROUTE MOUNTING
// ---------------------------
app.use("/api/models", modelRoutes);

// ⚠️ Uncomment when implemented
// app.use("/api/analyze", analyzeRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/batch", batchRoutes);

// ---------------------------
// ✅ TEST ROUTE (for frontend connection)
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Frontend and Backend are connected successfully!" });
});

// ✅ HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({ status: "Server running fine ✅" });
});

// ---------------------------
// ✅ START SERVER
// ---------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
