require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const todoRoutes = require("./routes/todoRoute");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


