import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 px-8 py-4 shadow">
      <h1 className="text-2xl font-bold text-blue-400">Finance App</h1>

      <div className="flex gap-6 items-center">
        <Link className="hover:text-blue-400" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-blue-400" to="/transactions">Transactions</Link>
        <button
          onClick={logout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}