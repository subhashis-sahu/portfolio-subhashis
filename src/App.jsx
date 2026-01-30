import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/Dashboard";
import ProtectedRoute from "./Admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
