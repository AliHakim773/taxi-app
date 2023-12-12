import "./styles/index.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Navbar from "./components/common/Navbar";
import { Sidebar } from "./components/common/Sidebar";
function App() {
  return (
    <div className="page">
      <Navbar />
      <div className="flex row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
