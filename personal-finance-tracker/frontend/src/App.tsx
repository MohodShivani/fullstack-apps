import Signup  from "./pages/Signup"
import Signin from "./pages/Signin"
import TransactionPage from "./pages/Transaction"
import DashboardPage from "./pages/Dashboard"
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Corrected routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App