import React from "react"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import "./styles.css"
import LoginForm from "./components/LoginForm"

const Login = () => {
    return (
        <div className='page'>
            <NavBar />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login
