import dotenv from "dotenv";
dotenv.config();

export const MONGO_URL: string = process.env.MONGO_URL!;
export const JWT_PASSWORD: string = process.env.JWT_PASSWORD!;

if (!MONGO_URL) {
  throw new Error("MONGO_URL missing in .env");
}

if (!JWT_PASSWORD) {
  throw new Error("JWT_PASSWORD missing in .env");
}