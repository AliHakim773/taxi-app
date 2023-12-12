import React from "react"
import NavBar from "../../components/common/NavBar"
import Footer from "../../components/common/Footer"
import EditProfileForm from "../../components/EditProfileForm"
import "./styles.css"

const EditProfile = () => {
    return (
        <div className='page'>
            <NavBar />
            <main className='edit-main'>
                <EditProfileForm />
            </main>
            <Footer />
        </div>
    )
}

export default EditProfile
