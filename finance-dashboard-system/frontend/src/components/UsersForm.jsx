import { useState } from "react";
import API from "../services/api";

export default function UserForm({ onAdd }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "user",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUser = async () => {
    e.prevent.Default()
    if (!form.username || !form.email) return;
    try {
      await API.post("/user", form);

      setForm({
        username: "",
        email: "",
        role: "user",
        status: "active",
      });

      onAdd();
    } catch (err) {
      console.log(err)
    }

  };

  return (
    <div className="bg-slate-700 text-black w-full h-24 p-10">
      <form onSubmit={addUser} className="flex justify-around">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="input w-56 h-8 rounded-md"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="input w-56 h-8 rounded-md"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="input w-56 h-8 rounded-md"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="input w-56 h-8 rounded-md"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button type="submit" className="btn-primary w-40 h-8 border-2 rounded-md bg-slate-800 text-white">
          Add
        </button>
      </form>
    </div>

  );
}