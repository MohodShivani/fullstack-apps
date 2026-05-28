import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-3 py-1 w-18 bg-gray-700 dark:bg-gray-900 dark:text-white rounded"
    >
      Logout
    </button>
  );
}