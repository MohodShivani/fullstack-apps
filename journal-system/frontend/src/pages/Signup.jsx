import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({name: "", email: "", password: ""});

  const signup = async () => {
    try {
      await API.post("/auth/signup", form);
      navigate("/signin");
    } catch (err) {
       console.log(err.response?.data);
       alert("Signup failed");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-bl from-sky-900 via-sky-300 to-black text-white flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-black mt-10 mb-28 gap-3">
        Journal System
      </h1>
      
      <div className="w-80 bg-white text-black  border p-6 rounded">
        <h2 className="text-xl mb-4">Signup</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
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
          onClick={signup}
          className="bg-blue-600 text-white w-full p-2"
        >
          Signup
        </button>

        <p className="mt-3 text-sm text-center">
           Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Signin
          </span>
        </p>

      </div>
    </div>
  );
}
