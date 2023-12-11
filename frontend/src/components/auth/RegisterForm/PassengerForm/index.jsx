import React, { useState } from "react"
import InputField from "../../../common/InputField"
import Button from "../../../common/Button"
import { Link } from "react-router-dom"

const PassengerForm = () => {
    const [vlu, set] = useState("")

    return (
        <form className='reg-form'>
            <div className='registerform-pair'>
                <InputField
                    text={"Name"}
                    type={"text"}
                    value={vlu}
                    handleChange={(e) => {
                        set(e.target.value)
                    }}
                />
                <InputField
                    text={"Email"}
                    type={"email"}
                    value={vlu}
                    handleChange={(e) => {
                        set(e.target.value)
                    }}
                />
            </div>
            <div className='registerform-pair'>
                <InputField
                    text={"Password"}
                    type={"password"}
                    value={vlu}
                    handleChange={(e) => {
                        set(e.target.value)
                    }}
                />
                <InputField
                    text={"Confirm Password"}
                    type={"password"}
                    value={vlu}
                    handleChange={(e) => {
                        set(e.target.value)
                    }}
                />
            </div>
            <div className='registerform-pair'>
                <InputField
                    text={"Location"}
                    type={"text"}
                    value={vlu}
                    handleChange={(e) => {
                        set(e.target.value)
                    }}
                />
                <InputField
                    text={"Phone Number"}
                    type={"number"}
                    value={vlu}
                    handleChange={(e) => {
                        set(e.target.value)
                    }}
                />
            </div>
            <div className='submit-btn-wrapper'>
                <Button text={"Register"} />
                <p>
                    Already Have an Account?{" "}
                    <Link to={"/login"}>Login Here.</Link>
                </p>
            </div>
        </form>
    )
}

export default PassengerForm
