import React, { useState } from "react"
import "./styles.css"
import { Link } from "react-router-dom"
import PfpDropDown from "./PfpDropDown"

const NavBar = () => {
    const [isHidden, setIsHidden] = useState(true)

    const handleOnClickProfile = () => {
        setIsHidden((prev) => !prev)
    }
    return (
        <nav className='nav-bar'>
            <Link to={"/"}>
                <span className='logo'>Taxi App</span>
            </Link>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link className='nav-item'>Home</Link>
                    </li>
                    <li>
                        <Link className='nav-item'>Call A Ride</Link>
                    </li>
                    <li>
                        <Link className='nav-item'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/login"} className='nav-item'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item'>Register</Link>
                    </li>
                    <li>
                        <div className='pfp-pic' onClick={handleOnClickProfile}>
                            <img src='' alt='' />
                        </div>
                        <PfpDropDown isHidden={isHidden} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
