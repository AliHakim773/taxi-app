import "./styles/index.css"

import { Route, Routes } from "react-router-dom"

import SignIn from "./pages/SignIn"

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<SignIn />} />
            </Routes>
        </div>
    )
}

export default App
