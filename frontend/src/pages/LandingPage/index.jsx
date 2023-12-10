import React from "react"
import "./styles.css"
import NavBar from "../../components/NavBar"
import HeroSection from "./HeroSection"
import AboutUs from "./AboutUs"
import Footer from "../../components/Footer"

const LandingPage = () => {
    return (
        <div className='page'>
            <NavBar />
            <HeroSection />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default LandingPage
