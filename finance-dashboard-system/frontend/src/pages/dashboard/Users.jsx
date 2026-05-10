import { useState, useEffect } from "react";
import API from "../../services/api";
import UserForm from "../../components/UsersForm";
import UserItem from "../../components/UsersItem";

export default function Users() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    role: "viewer",
    status: "active",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/user");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Filter users based on role & status
  const filteredUsers = users.filter(
    (u) =>
      (form.role ? u.role === form.role : true) &&
      (form.status ? u.status === form.status : true)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Users</h1>

      {/* ✅ Add User Form */}
      <UserForm onAdd={fetchUsers} />

      {/* ✅ Filters */}
      <div className="bg-slate-200 p-4 rounded w-fit mt-6 flex gap-4">
        <div>
          <label>Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full text-black"
          >
            <option value="">All</option>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
            <option value="analyst">Analyst</option>
          </select>
        </div>

        <div>
          <label>Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full text-black"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* ✅ Users List */}
      <div className="mt-6 space-y-3">
        {filteredUsers.map((user) => (
          <UserItem
            key={user._id}
            user={user}
            refresh={fetchUsers}
          />
        ))}
      </div>
    </div>
  );
}