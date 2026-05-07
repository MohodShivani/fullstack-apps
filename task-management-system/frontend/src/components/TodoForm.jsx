import { useState } from "react";
import API from "../services/api";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    try{
      if (!title.trim()) return;
      await API.post("/todo", { title });
      setTitle("");
      onAdd();
    }catch(err){
      console.log(err.response.data)
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border rounded-lg
             bg-white dark:bg-gray-700
             text-gray-800 dark:text-gray-100
             border-gray-300 dark:border-gray-600
             focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={addTodo}
        className="bg-black hover:bg-slate-400 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </div>
  );
}
