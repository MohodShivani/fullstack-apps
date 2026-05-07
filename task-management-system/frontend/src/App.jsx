import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Todos from "./pages/Todos";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated()
    ? children
    : <Navigate to="/signin" />;
};

const AuthRoute = ({ children }) => {
  return isAuthenticated()
    ? <Navigate to="/" />
    : children;
};

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Public Auth Routes */}
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthRoute>
              <Signin />
            </AuthRoute>
          }
        />

      

        {/* Protected Todo Route */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todos />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
