
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import brainRoutes from "./routes/brainRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1", authRoutes);
app.use("/api/v1/content", contentRoutes);
app.use("/api/v1/brain", brainRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});