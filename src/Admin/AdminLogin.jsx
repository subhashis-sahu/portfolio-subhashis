import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch(
      "https://subhashissahu.onrender.com/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      }
    );

    if (!res.ok) {
      alert("Invalid credentials");
      return;
    }

    const data = await res.json();

    // ✅ Save JWT
    localStorage.setItem("adminToken", data.token);

    // ✅ Go to FRONTEND route (not API)
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <input
          placeholder="Username"
          className="border p-2 w-full mb-2"
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-black text-white px-4 py-2 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
