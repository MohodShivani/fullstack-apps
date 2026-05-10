import { useState } from "react";
import API from "../services/api";

export default function UserItem({ user, refresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    username: user.username,
    email: user.email,
    role: user.role,
    status: user.status,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateUser = async () => {
    await API.put(`/users/${user._id}`, form);
    setIsEditing(false);
    refresh();
  };

  const deleteUser = async () => {
    await API.delete(`/users/${user._id}`);
    refresh();
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
      
      {isEditing ? (
        <div className="flex flex-wrap gap-2">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className="input"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
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
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            {user.username}
          </span>
          <span className="text-sm text-gray-500">{user.email}</span>
          <span className="text-sm">
            {user.role} |{" "}
            <span
              className={
                user.status === "active"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {user.status}
            </span>
          </span>
        </div>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={updateUser}
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
          onClick={deleteUser}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}