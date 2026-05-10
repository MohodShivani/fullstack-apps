require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const recordRoute = require("./routes/recordRoute")
const dashboardRoute = require("./routes/dashboardRoute")

const app = express();


app.use(cors({
  origin:"*"
}));
app.use(express.json());

connectDB();


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/record",recordRoute)
app.use("/api/v1/dashboard",dashboardRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

