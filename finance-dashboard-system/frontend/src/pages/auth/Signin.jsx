import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function Signin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const signin = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/auth/signin", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black flex flex-col">

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-10 gap-3">
        Finance Dashboard System
      </h1>

      {/* Center */}
      <div className="flex flex-1 items-center justify-center px-4">
        
        {/* Card */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          
          <h2 className="text-2xl font-semibold text-center mb-6">
            Sign in
          </h2>

          {/* Email */}
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* Password */}
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {/* Button */}
          <button
            onClick={signin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}