import { Pool } from "pg"
import { env } from "../config/env.js"

export const pool=new Pool({
   connectionString:env.DATABASE_URL,
   ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
})

pool.connect()
   .then(()=>{
      console.log("Database Connected")
   })

   .catch((err)=>{
      console.log(err)
      console.log("Connection fails")
   })