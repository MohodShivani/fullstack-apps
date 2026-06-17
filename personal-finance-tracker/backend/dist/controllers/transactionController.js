import { pool } from "../db/db.js";
export const createTransaction = async (req, res) => {
    const userId = req.userId;
    const { type, category, description, amount } = req.body;
    try {
        const query = `INSERT INTO transactions (user_id, type, category, description, amount) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
        const response = await pool.query(query, [userId, type, category, description, amount]);
        res.status(201).json({
            message: "Transaction created successfully",
            expense: response.rows[0]
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error in creating expenses!"
        });
    }
};
export const getTransaction = async (req, res) => {
    const userId = req.userId;
    try {
        const query = `SELECT * FROM transactions Where user_id = $1 ORDER BY id`;
        const response = await pool.query(query, [userId]);
        res.json({
            transactions: response.rows
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error in fetching response"
        });
    }
};
export const updateTransaction = async (req, res) => {
    const transactionId = req.params.id;
    const { type, category, description, amount } = req.body;
    try {
        const query = `UPDATE transactions SET type=$1, category = $2, description = $3, amount = $4 WHERE id = $5 RETURNING *`;
        const response = await pool.query(query, [type, category, description, amount, transactionId]);
        if (response.rows.length === 0) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }
        return res.status(200).json({
            message: "Transaction updated successfully",
            transaction: response.rows[0]
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Error updating transaction"
        });
    }
};
export const deleteTransaction = async (req, res) => {
    const transactionId = req.params.id;
    try {
        const query = `DELETE from transactions WHERE id=$1 RETURNING *`;
        const response = await pool.query(query, [transactionId]);
        if (response.rows.length === 0) {
            res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "Transaction deleted successfully!",
            expenses: response.rows[0]
        });
    }
    catch (err) {
        console.error(err);
        res.status(404).json({
            message: "User not found"
        });
    }
};
//# sourceMappingURL=transactionController.js.map