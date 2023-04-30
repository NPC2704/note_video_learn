import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import ProtectedRoute from "./components/routing/ProtectedRoute";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Auth authRoutes="login" />} />
          <Route
            exact
            path="/register"
            element={<Auth authRoutes="register" />}
          />

          <Route exact path="/dashboard" element={<ProtectedRoute />} />
          <Route exact path="/about" element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
