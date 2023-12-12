import "./styles/index.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="page">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
