import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading,setLoading] = useState(false)

  const signup = async () => {
    try {
      setLoading(true)
      await API.post("/auth/signup", form);
      navigate("/signin");
    } catch (err) {
      console.log(err.response?.data);
      alert("Signup failed");
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black flex flex-col">

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-10 gap-3">
        Task Management System
      </h1>
      <div className="flex flex-1 items-center justify-center px-4">

        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>

          <input
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={signup}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/signin")}
            >
              Signin
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
