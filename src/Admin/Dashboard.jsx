import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddWork from "./AddWork";
import ManageWork from "./ManageWork";
import Contact from "./Contact";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("manage");

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h1 className="text-xl font-bold text-gray-800 mb-8">
          Admin Panel
        </h1>

        <nav className="space-y-3">
          {/* Manage Works */}
          <button
            onClick={() => setActiveTab("manage")}
            className={`w-full text-left px-4 py-2 rounded-lg transition
              ${
                activeTab === "manage"
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            Manage Works
          </button>

          {/* Add Work */}
          <button
            onClick={() => setActiveTab("add")}
            className={`w-full text-left px-4 py-2 rounded-lg transition
              ${
                activeTab === "add"
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            Add Work
          </button>

          {/* Contacts */}
          <button
            onClick={() => setActiveTab("contact")}
            className={`w-full text-left px-4 py-2 rounded-lg transition
              ${
                activeTab === "contact"
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            Contacts
          </button>

          {/* Logout */}
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition mt-6"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTab === "manage" && <ManageWork />}
          {activeTab === "add" && <AddWork />}
          {activeTab === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}