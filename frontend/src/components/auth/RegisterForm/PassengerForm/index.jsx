import React, { useState } from "react"
import InputField from "../../../common/InputField"
import Button from "../../../common/Button"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { requestData } from "../../../../core/axios"
import { setUser } from "../../../../core/redux/user/userSlice"

const PassengerForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [error, setError] = useState({ msg: "", status: false })
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        phone_number: "",
    })
    const HandleOnInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleRegister = async () => {
        if (values.confirmPassword === values.password) {
            setError({
                msg: "password",
                status: true,
            })
            return
        }
        try {
            const res = await requestData("register_passenger", "post", values)
            if (res.status == "success") {
                localStorage.setItem(
                    "token",
                    `Bearer ${res.authorisation.token}`
                )
                dispatch(setUser(res.user))
                navigate("/")
            }
            console.log(res)
            return
        } catch (err) {
            setError({
                msg: "Wrong Information",
                status: true,
            })
        }
    }
    return (
        <form className='reg-form'>
            <div className='registerform-pair'>
                <InputField
                    type={"text"}
                    name={"name"}
                    text={"Name"}
                    value={values.name}
                    handleChange={HandleOnInputChange}
                />
                <InputField
                    type={"email"}
                    name={"email"}
                    text={"Email"}
                    value={values.email}
                    handleChange={HandleOnInputChange}
                />
            </div>
            <div className='registerform-pair'>
                <InputField
                    type={"password"}
                    name={"password"}
                    text={"Password"}
                    value={values.password}
                    handleChange={HandleOnInputChange}
                />
                <InputField
                    type={"password"}
                    name={"confirmPassword"}
                    text={"Confirm Password"}
                    value={values.confirmPassword}
                    handleChange={HandleOnInputChange}
                />
            </div>
            <div className='registerform-pair'>
                <InputField
                    type={"text"}
                    name={"location"}
                    text={"Location"}
                    value={values.location}
                    handleChange={HandleOnInputChange}
                />
                <InputField
                    type={"text"}
                    name={"phone_number"}
                    text={"Phone Number"}
                    value={values.phone_number}
                    handleChange={HandleOnInputChange}
                />
            </div>
            <div className='submit-btn-wrapper'>
                <Button
                    text={"Register"}
                    type={"submit"}
                    handleOnClick={handleRegister}
                />
                <p>
                    Already Have an Account?{" "}
                    <Link to={"/login"}>Login Here.</Link>
                </p>
            </div>
        </form>
    )
}

export default PassengerForm
