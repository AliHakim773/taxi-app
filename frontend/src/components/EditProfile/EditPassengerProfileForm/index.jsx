import React, { useState } from "react"
import defaultPic from "../../../assets/images/Default_pfp.jpg"
import InputField from "../../common/InputField"
import Button from "../../common/Button"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { requestData } from "../../../core/axios"
import { setUser } from "../../../core/redux/user/userSlice"

const EditPassengerProfileForm = () => {
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

    useEffect(() => {}, [])

    const HandleOnInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleEdit = async () => {
        if (values.confirmPassword !== values.password) {
            setError({
                msg: "passwords doesnt match",
                status: true,
            })
            return
        }
        try {
            const res = await requestData("edit_passenger", "post", values)
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
        <form className='edit-form'>
            <div className='profile-header'>
                <div className='edit-pfp-pic'>
                    <img src={defaultPic} alt='Profile Picture' />
                </div>
                <div className='edit-info'>
                    <div className='edit-name'>John Doe</div>
                    <div className='edit-email'>John@email.com</div>
                    <div className='upload-img-btn'>
                        <label className='btn btn-primary' htmlFor='pfp-img'>
                            Upload Photo
                        </label>
                        <input
                            type='file'
                            name='pfp-img'
                            id='pfp-img'
                            placeholder='Upload Photo'
                        />
                    </div>
                </div>
                <div className='edit-role'>Passenger</div>
            </div>
            <div className='profile-body'>
                <div className='editform-pair'>
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
                <div className='editform-pair'>
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
                <div className='editform-pair'>
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
                {error.status ? <span className='error'>{error.msg}</span> : ""}
                <div className='submit-btn-wrapper'>
                    <Button
                        text={"Edit Profile"}
                        type={"submit"}
                        handleOnClick={handleEdit}
                    />
                </div>
            </div>
        </form>
    )
}

export default EditPassengerProfileForm
