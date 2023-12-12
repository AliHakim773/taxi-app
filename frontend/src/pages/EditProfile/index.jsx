import React from "react"
import NavBar from "../../components/common/NavBar"
import Footer from "../../components/common/Footer"
import EditPassengerProfileForm from "../../components/EditProfile/EditPassengerProfileForm"
import "./styles.css"
import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/redux/user/userSlice"
import EditDriverProfileForm from "../../components/EditProfile/EditDriverProfileForm"

const EditProfile = () => {
    const userState = useSelector(extractUserSlice)
    return (
        <div className='page'>
            <NavBar />
            <main className='edit-main'>
                {/* {userState.role_id == 3 ? (
                    <EditDriverProfileForm />
                ) : (
                    <EditPassengerProfileForm />
                )} */}
                <EditDriverProfileForm />
            </main>
            <Footer />
        </div>
    )
}

export default EditProfile
