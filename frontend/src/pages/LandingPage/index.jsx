import React from "react"
import "./styles.css"
import NavBar from "../../components/NavBar"
import HeroSection from "./HeroSection"

const LandingPage = () => {
    return (
        <div className='page'>
            <NavBar />
            <HeroSection />
        </div>
    )
}

export default LandingPage
