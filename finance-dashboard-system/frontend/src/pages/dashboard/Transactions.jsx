import { useEffect, useState } from "react";
import API from "../../services/api";
import TransactionForm from "../../components/TransactionForm";
import TransactionItem from "../../components/TransactionItem";

export default function Transactions() {
  const [records, setRecords] = useState([]);

  const [filter, setFilter] = useState({
    type: "",
    category: "",
  });

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await API.get("/record"); // make sure endpoint is correct
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Filtering logic
  const filteredRecords = records.filter(
    (rec) =>
      (filter.type ? rec.type === filter.type : true) &&
      (filter.category
        ? rec.category.toLowerCase().includes(filter.category.toLowerCase())
        : true)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Transactions</h1>

      {/* ✅ Add Transaction Form */}
      <TransactionForm onAdd={fetchRecords} />

      {/* ✅ Filters */}
      <div className="bg-slate-200 p-4 rounded mt-6 flex gap-4">
        <div>
          <label>Type</label>
          <select
            name="type"
            value={filter.type}
            onChange={handleFilterChange}
            className="w-full text-black"
          >
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label>Category</label>
          <input
            name="category"
            value={filter.category}
            onChange={handleFilterChange}
            placeholder="Search category"
            className="w-full text-black"
          />
        </div>
      </div>

      {/* ✅ Transactions List */}
      <div className="mt-6 space-y-3">
        {filteredRecords.length === 0 ? (
          <p>No transactions</p>
        ) : (
          filteredRecords.map((rec) => (
            <TransactionItem
              key={rec._id}
              txn={rec}
              refresh={fetchRecords}
            />
          ))
        )}
      </div>
    </div>
  );
}