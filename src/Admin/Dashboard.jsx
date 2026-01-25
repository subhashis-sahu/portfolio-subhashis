import { useNavigate } from "react-router-dom";
import AddWork from "./AddWork";
export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    await fetch("http://localhost:8080/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    navigate("/admin/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <button
        className="mt-4 bg-red-500 text-white px-4 py-2"
        onClick={logout}
      >
        Logout
      </button>
      <div>
        <AddWork/>

      </div>
    </div>
  );
}
