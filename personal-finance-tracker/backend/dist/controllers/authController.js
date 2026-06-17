import { pool } from "../db/db.js";
import bcrypt from "bcrypt";
import { env } from "../config/env.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const query = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id`;
        const response = await pool.query(query, [username, email, hashedPassword]);
        res.status(201).json({
            message: "You have signed up!"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error while signing up"
        });
    }
};
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await pool.query("SELECT * FROM users WHERE  email = $1", [email]);
        if (response.rows.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const user = response.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }
        const token = jwt.sign({
            userId: user.id
        }, env.JWT_SECRET, {
            expiresIn: "1d"
        });
        res.status(201).json({
            message: "You have signed in successfully",
            token
        });
    }
    catch (err) {
        console.error(err);
        res.status(404).json({
            message: "Invalid credentials"
        });
    }
};
//# sourceMappingURL=authController.js.map