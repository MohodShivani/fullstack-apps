import { useState } from "react";
import API from "../services/api";

export default function TodoItem({ todo, refresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleDone = async () => {
    await API.put(`/todo/${todo._id}`, {
      done: !todo.done
    });
    refresh();
  };

  const updateTodo = async () => {
    await API.put(`/todo/${todo._id}`, {
      title
    });
    setIsEditing(false);
    refresh();
  };

  const deleteTodo = async () => {
    await API.delete(`/todo/${todo._id}`);
    refresh();
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={toggleDone}
          className="w-5 h-5"
        />

        {isEditing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <span className={`${
            todo.done
            ? "line-through text-gray-400"
            : "text-gray-800 dark:text-gray-100"
            }`}>
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={updateTodo}
            className="bg-black text-white px-3 py-1 rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-slate-900 text-white px-3 py-1 rounded-md"
          >
            Edit
          </button>
        )}

        <button
          onClick={deleteTodo}
          className="bg-slate-900 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
