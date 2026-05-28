import { useEffect, useState } from "react";
import API from "../../services/api";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function OverviewPage() {
  const [summary, setSummary] = useState({});
  const [categories, setCategories] = useState([]);
  const [trends, setTrends] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [summaryRes, categoryRes, trendsRes, recentRes] =
        await Promise.all([
          API.get("/api/dashboard/summary"),
          API.get("/api/dashboard/category"),
          API.get("/api/dashboard/trends"),
          API.get("/api/dashboard/recent"),
        ]);

      setSummary(summaryRes.data);
      setCategories(categoryRes.data);
      setTrends(trendsRes.data);
      setRecent(recentRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-2xl p-5">
          <h2 className="text-gray-500">Total Records</h2>
          <p className="text-3xl font-bold">
            {summary.totalRecords || 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5">
          <h2 className="text-gray-500">Total Categories</h2>
          <p className="text-3xl font-bold">
            {summary.totalCategories || 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5">
          <h2 className="text-gray-500">Active Users</h2>
          <p className="text-3xl font-bold">
            {summary.totalUsers || 0}
          </p>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white shadow rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-4">
          Monthly Trends
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Category Distribution */}
      <div className="bg-white shadow rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-4">
          Category Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categories}
              dataKey="total"
              nameKey="category"
              outerRadius={100}
              label
            >
              {categories.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {recent.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}