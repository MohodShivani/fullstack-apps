import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Corrected routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
