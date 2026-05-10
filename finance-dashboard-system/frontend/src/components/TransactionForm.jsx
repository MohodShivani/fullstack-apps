import { useState } from "react";
import API from "../services/api";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTransaction = async () => {
    if (!form.amount || !form.category) return;

    await API.post("/transactions", form);

    setForm({
      amount: "",
      type: "expense",
      category: "",
      date: "",
      note: "",
    });

    onAdd(); // refresh list
  };

  return (
    <div className="flex flex-wrap gap-2">
      <input
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="input"
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="input"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="input"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="input"
      />

      <input
        name="note"
        value={form.note}
        onChange={handleChange}
        placeholder="Note"
        className="input"
      />

      <button
        onClick={addTransaction}
        className="btn-primary"
      >
        Add
      </button>
    </div>
  );
}