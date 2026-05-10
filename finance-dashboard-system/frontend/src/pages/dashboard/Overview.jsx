import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Overview() {
  const [summary, setSummary] = useState({});
  const [category, setCategory] = useState([]);
  const [recent, setRecent] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [summaryRes, categoryRes, recentRes, trendRes] =
        await Promise.all([
          API.get("/dashboard/summary"),
          API.get("/dashboard/category"),
          API.get("/dashboard/recent"),
          API.get("/dashboard/trends"),
        ]);

      setSummary(summaryRes.data);
      setCategory(categoryRes.data);
      setRecent(recentRes.data);
      setTrends(trendRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 text-white">
      
      {/* SUMMARY */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 p-4 rounded">
          <h2>Income</h2>
          <p>₹{summary.totalIncome}</p>
        </div>

        <div className="bg-red-500 p-4 rounded">
          <h2>Expense</h2>
          <p>₹{summary.totalExpense}</p>
        </div>

        <div className="bg-blue-500 p-4 rounded">
          <h2>Balance</h2>
          <p>₹{summary.netBalance}</p>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="mb-6">
        <h2 className="text-xl mb-2">Top Categories</h2>
        {category.map((cat, i) => (
          <div key={i} className="flex justify-between">
            <span>{cat._id}</span>
            <span>₹{cat.total}</span>
          </div>
        ))}
      </div>

      {/* RECENT */}
      <div className="mb-6">
        <h2 className="text-xl mb-2">Recent Activity</h2>
        {recent.map((item) => (
          <div key={item._id} className="flex justify-between">
            <span>{item.category}</span>
            <span>₹{item.amount}</span>
          </div>
        ))}
      </div>

      {/* TRENDS */}
      <div>
        <h2 className="text-xl mb-2">Monthly Trends</h2>
        {trends.map((t) => (
          <div key={t._id} className="flex justify-between">
            <span>Month {t._id}</span>
            <span>Income: ₹{t.income}</span>
            <span>Expense: ₹{t.expense}</span>
          </div>
        ))}
      </div>

    </div>
  );
}