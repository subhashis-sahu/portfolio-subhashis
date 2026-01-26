import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    fetch("https://subhashissahu.onrender.com/admin/check", {
      credentials: "include",
    })
      .then((res) => setAllowed(res.ok))
      .catch(() => setAllowed(false));
  }, []);

  if (allowed === null) return null; // loading
  return allowed ? children : <Navigate to="/admin/login" />;
}
