import React, { useState } from "react"
import "./styles.css"
import InputForm from "../../../../components/InputForm"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    return (
        <form className='login-form'>
            <h2 className='form-title'>Enter Your Credentials</h2>
            <div className='form-body'>
                <InputForm type={"email"} text={"Email"} name={"email"} />
                <InputForm
                    type={"password"}
                    text={"Password"}
                    name={"password"}
                />
            </div>
        </form>
    )
}

export default LoginForm
