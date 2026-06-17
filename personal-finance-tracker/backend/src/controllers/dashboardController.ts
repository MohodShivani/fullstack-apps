import type { Response } from "express";
import { pool } from "../db/db.js";

export const getDashboardSummary = async (req: any, res: Response) => {
    const userId = req.userId;

    try {
        const response = await pool.query(
            `
            SELECT
                COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END),0) AS total_income,
                COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END),0) AS total_expense
            FROM transactions
            WHERE user_id = $1
            AND DATE_TRUNC('month', transaction_date) =
                DATE_TRUNC('month', CURRENT_DATE)
            `,
            [userId]
        );

        const totalIncome = Number(response.rows[0].total_income);
        const totalExpense = Number(response.rows[0].total_expense);

        res.status(200).json({
            totalIncome,
            totalExpense,
            savings: totalIncome - totalExpense
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const getExpenseByCategory = async (req: any, res: Response) => {
    const userId = req.userId;

    try {
        const response = await pool.query(
        `
        SELECT category,
               SUM(amount) as total
        FROM transactions
        WHERE user_id = $1
        AND type = 'expense'
        GROUP BY category
        ORDER BY total DESC
        `,
            [userId]
        );

        res.json(response.rows);

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }

}