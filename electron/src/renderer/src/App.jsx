import "./styles/index.css";
import Login from "./pages/Login";
import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/common/Navbar";
import { Drivers } from "./pages/Drivers";
import { Sidebar } from "./components/common/Sidebar";
import { ViewDriver } from "./components/ViewDriver";
function App() {
  const location = useLocation();
  return (
    <div className="page">
      <Navbar key={location.pathname} />
      <div className="flex row content">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/viewdriver/:id" element={<ViewDriver />} />
            {/* <Route path="/passengers" element={<Passengers />} />
          <Route path="/analytics" element={<Analytics />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
