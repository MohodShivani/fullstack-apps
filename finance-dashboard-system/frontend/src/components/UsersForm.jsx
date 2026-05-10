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
    if (!form.username || !form.email) return;

    await API.post("/users", form);

    setForm({
      username: "",
      email: "",
      role: "user",
      status: "active",
    });

    onAdd();
  };

  return (
    <div className="flex flex-wrap gap-2">
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        className="input"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="input"
      />

      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="input"
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="input"
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button onClick={addUser} className="btn-primary">
        Add
      </button>
    </div>
  );
}