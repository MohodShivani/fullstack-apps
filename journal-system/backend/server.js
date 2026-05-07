require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const journalRoute = require("./routes/journalRoute");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

connectDB();

app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/journal", journalRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


