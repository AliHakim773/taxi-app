import "./styles/index.css"

import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage"
import Register from "./pages/Register"
import ChatRoom from "./pages/ChatRoom/chatroom.component"
import EditProfile from "./pages/EditProfile"
function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/chatroom' element={<ChatRoom />} />
                <Route path='/edit-profile' element={<EditProfile />} />
                <Route path="/contact" element={<ChatRoom />} />
            </Routes>
        </div>
    )
}

export default App
