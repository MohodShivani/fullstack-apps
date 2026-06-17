import express from "express"
import cors from "cors" 
import authRoutes from "./routes/authRoutes.js"
import transactionRoutes from "./routes/transactionRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"

const app=express()
app.use(express.json())
app.use(cors())

app.use("/auth",authRoutes)
app.use("/transactions",transactionRoutes)
app.use("/dashboard", dashboardRoutes)

const PORT= process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});