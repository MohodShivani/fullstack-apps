import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const signin = async () => {
    try {
      const res = await API.post("/auth/signin", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen  bg-gradient-to-bl from-sky-900 via-sky-300 to-black text-white flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-black mt-10 mb-28 gap-3">
        Journal System
      </h1>


      <div className="w-80 bg-white text-black border p-6 rounded">
        <h2 className="text-xl mb-4">Signin</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={signin}
          className="bg-blue-600 text-white w-full p-2"
        >
          Signin
        </button>

        <p className="mt-3 text-sm text-center">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </span>
        </p>

      </div>
    </div>
  );
}
