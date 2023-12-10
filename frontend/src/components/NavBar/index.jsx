import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

const NavBar = () => {
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
                        <Link className='nav-item'>Login</Link>
                    </li>
                    <li>
                        <Link className='nav-item'>Register</Link>
                    </li>
                    <li>
                        <div className='pfp-pic'></div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
