import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const decoded = jwt.verify(token, env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        console.error(err);
        res.status(401).json({
            message: "Unauthorized user"
        });
    }
};
//# sourceMappingURL=authMiddleware.js.map