import "./styles/index.css";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
