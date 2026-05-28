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

  const addTransaction = async (e) => {
    e.preventDefault()

    if (!form.amount || !form.category) return;

    try {
      await API.post("/record", form);

      setForm({
        amount: "",
        type: "expense",
        category: "",
        date: "",
        note: "",
      });

      onAdd();
    } catch (err) {
      console.log(err)
    }

  };

  return (
    <div className="bg-slate-700 text-black w-full h-24 p-10">
      <form onSubmit={addTransaction} className="flex justify-around">
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="input w-40 h-8 rounded-md"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="input w-40 h-8 rounded-md"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="input w-40 h-8 rounded-md"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="input w-40 h-8 rounded-md"
        />

        <input
          name="note"
          value={form.note}
          onChange={handleChange}
          placeholder="Note"
          className="input w-40 h-8 rounded-md"
        />

        <button
          type="submit"
          className="btn-primary w-40 h-8 rounded-md bg-slate-800 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}