import "./styles/index.css";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </div>
  );
}

export default App;
