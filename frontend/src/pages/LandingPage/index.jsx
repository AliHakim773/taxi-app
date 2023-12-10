import React from "react"
import "./styles.css"
import NavBar from "../../components/NavBar"
import HeroSection from "./HeroSection"
import AboutUs from "./AboutUs"

const LandingPage = () => {
    return (
        <div className='page'>
            <NavBar />
            <HeroSection />
            <AboutUs />
        </div>
    )
}

export default LandingPage
