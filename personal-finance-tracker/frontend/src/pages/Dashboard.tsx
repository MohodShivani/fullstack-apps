import { useEffect, useState } from "react";
import { getDashboardSummary, getExpenseByCategory } from "../services/dashboard";
import { useNavigate } from "react-router-dom";


interface DashboardData {
    totalIncome: number;
    totalExpense: number;
    savings: number;
}

const DashboardPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<DashboardData>({ 
        totalIncome: 0, 
        totalExpense: 0, 
        savings: 0, 
    });

    const [categories, setCategories] = useState<{ category: string; total: number }[]>([]);

    const fetchSummary = async () => {
        try {
            const response = await getDashboardSummary();
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    
    const fetchCategories = async () => {
        try {
            const response = await getExpenseByCategory();
            setCategories(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchSummary();
        fetchCategories();
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">
                    Monthly Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold text-gray-500">
                            Total Income
                        </h2>

                        <p className="text-3xl font-bold text-green-600 mt-2">
                            ₹{data.totalIncome}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold text-gray-500">
                            Total Expenses
                        </h2>

                        <p className="text-3xl font-bold text-red-600 mt-2">
                            ₹{data.totalExpense}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold text-gray-500">
                            Savings
                        </h2>

                        <p className="text-3xl font-bold text-blue-600 mt-2">
                            ₹{data.savings}
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow mt-6 max-w-5xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">
                    Expense Breakdown
                </h2>

                {categories.map((item) => (
                    <div
                        key={item.category}
                        className="flex justify-between py-2 border-b"
                    >
                        <span>{item.category}</span>
                        <span>₹{item.total}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate("/transaction")}
                className="fixed bottom-6 pb-3 right-6 w-16 h-16 rounded-full bg-blue-600 text-white text-5xl shadow-lg"
            >
                +
            </button>
        </div>
    );
};

export default DashboardPage;