import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Journey from "./Components/Journey";
import Layout from "./Components/Layout";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/Dashboard";
import ProtectedRoute from "./Admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
        </Route>

        {/* Admin Routes (Separate Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
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
