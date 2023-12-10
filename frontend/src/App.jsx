import "./styles/index.css"

import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage"

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
