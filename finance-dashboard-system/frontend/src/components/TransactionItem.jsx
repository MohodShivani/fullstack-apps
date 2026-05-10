import { useState } from "react";
import API from "../services/api";

export default function TransactionItem({ txn, refresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    amount: txn.amount,
    type: txn.type,
    category: txn.category,
    date: txn.date,
    note: txn.note,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateTransaction = async () => {
    await API.put(`/transactions/${txn._id}`, form);
    setIsEditing(false);
    refresh();
  };

  const deleteTransaction = async () => {
    await API.delete(`/transactions/${txn._id}`);
    refresh();
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
      
      {isEditing ? (
        <div className="flex flex-wrap gap-2">
          <input name="amount" value={form.amount} onChange={handleChange} className="input" />

          <select name="type" value={form.type} onChange={handleChange} className="input">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input name="category" value={form.category} onChange={handleChange} className="input" />
          <input type="date" name="date" value={form.date} onChange={handleChange} className="input" />
          <input name="note" value={form.note} onChange={handleChange} className="input" />
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            ₹{txn.amount} - {txn.category}
          </span>
          <span className="text-sm text-gray-500">
            {txn.type} | {txn.date}
          </span>
          {txn.note && (
            <span className="text-sm italic">{txn.note}</span>
          )}
        </div>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={updateTransaction}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md"
          >
            Edit
          </button>
        )}

        <button
          onClick={deleteTransaction}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}