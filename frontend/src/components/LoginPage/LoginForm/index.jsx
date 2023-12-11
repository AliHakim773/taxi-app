import React, { useState } from "react"
import "./styles.css"
import InputField from "../../common/InputField"
import { Link } from "react-router-dom"
import Button from "../../common/Button"

const LoginForm = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const HandleOnChangeEmail = (e) => {
        setMail(e.target.value)
    }
    const HandleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {}

    return (
        <form className='login-form'>
            <h2 className='form-title'>Enter Your Credentials</h2>
            <div className='form-body'>
                <div className='email-field-wrapper'>
                    <InputField
                        type={"email"}
                        text={"Email"}
                        value={mail}
                        handleChange={HandleOnChangeEmail}
                    />
                </div>
                <div className='password-field-wrapper'>
                    <InputField
                        type={"password"}
                        text={"Password"}
                        value={password}
                        handleChange={HandleOnChangePassword}
                    />
                </div>
                <div className='btn-wrapper'>
                    <Button
                        text={"Login"}
                        handleOnClick={handleLogin}
                        type={"submit"}
                    />
                    <p>
                        Don't have an account?
                        <Link to={"/register"}>Register here.</Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
