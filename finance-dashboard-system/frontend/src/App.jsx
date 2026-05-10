import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

import Overview from "./pages/dashboard/Overview";
import Transactions from "./pages/dashboard/Transactions";
import Analytics from "./pages/dashboard/Analytics";
import Users from "./pages/dashboard/Users";
import Settings from "./pages/dashboard/Settings";

import DashboardLayout from "./components/DashboardLayout"
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>

           
            <Route path="overview" element={<Overview />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />

          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/signin" />} />

      </Routes>
    </BrowserRouter>






  );
}

export default App;




