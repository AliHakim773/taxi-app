import React, { useState } from "react"
import InputField from "../../../common/InputField"
import Button from "../../../common/Button"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../../../core/redux/user/userSlice"
import { requestData } from "../../../../core/axios"

const DriverForm = () => {
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
        model: "",
        color: "",
        plate_number: "",
    })

    const HandleOnInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleRegister = async () => {
        if (values.confirmPassword !== values.password) {
            setError({
                msg: "passwords doesnt match",
                status: true,
            })
            return
        }
        try {
            const res = await requestData("register_driver", "post", values)
            console.log(res)
            if (res.status == "success") {
                localStorage.setItem(
                    "token",
                    `Bearer ${res.authorisation.token}`
                )
                dispatch(setUser(res.user))
                navigate("/")
            }
        } catch (err) {
            setError({
                msg: "Something went Wrong",
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
            <div className='registerform-pair'>
                <InputField
                    type={"text"}
                    name={"model"}
                    text={"Car Model"}
                    value={values.model}
                    handleChange={HandleOnInputChange}
                />
                <InputField
                    text={"Plate Number"}
                    type={"text"}
                    name={"plate_number"}
                    value={values.plate_number}
                    handleChange={HandleOnInputChange}
                />
            </div>
            <div className='registerform-pair'>
                <InputField
                    text={"Car Color"}
                    type={"text"}
                    name={"color"}
                    value={values.color}
                    handleChange={HandleOnInputChange}
                />
            </div>
            {error.status ? <span className='error'>{error.msg}</span> : ""}
            <div className='submit-btn-wrapper'>
                <Button
                    type={"submit"}
                    handleOnClick={handleRegister}
                    text={"Register"}
                />
                <p>
                    Already Have an Account?{" "}
                    <Link to={"/login"}>Login Here.</Link>
                </p>
            </div>
        </form>
    )
}

export default DriverForm
