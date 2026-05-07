import { useEffect, useState } from "react";
import API from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import Logout from "../components/Logout";


export default function Todos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await API.get("/todo");
    setTodos(res.data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-white flex justify-center p-6 transition-colors">
      <div className="w-full bg-gray-700 max-w-xl  rounded-xl shadow-md p-6">

        <div className="flex  justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">
            My Todos
          </h1>
          <Logout />
        </div>

        <TodoForm onAdd={fetchTodos} />

        <div className="mt-4 space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              refresh={fetchTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
