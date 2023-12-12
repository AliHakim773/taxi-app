import React, { useEffect, useState } from "react"
import "./styles.css"
import { Link } from "react-router-dom"
import PfpDropDown from "./PfpDropDown"
import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "../../../core/redux/user/userSlice"
import { requestData } from "../../../core/axios"

const NavBar = () => {
    const dispatch = useDispatch()
    const userState = useSelector(extractUserSlice)

    const [isHidden, setIsHidden] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        const headers = {
            Authorization: token,
        }
        if (!token) {
            console.error("Token not available")
            setIsLoggedIn(false)
            return
        }
        const refresh = async () => {
            try {
                const res = await requestData("refresh", "post", {}, headers)
                if (res.status == "success") {
                    dispatch(setUser(res.user))
                    setIsLoggedIn(true)
                }
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        refresh()
    }, [])
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
                        <Link to={"/"} className='nav-item'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item'>Call A Ride</Link>
                    </li>
                    <li>
                        <Link className='nav-item'>Contact Us</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className='nav-item-nolink'>
                                {userState.name}
                            </li>
                            <li>
                                <div
                                    className='pfp-pic'
                                    onClick={handleOnClickProfile}>
                                    <img src='' alt='' />
                                </div>
                                <PfpDropDown
                                    isHidden={isHidden}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to={"/login"} className='nav-item'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to={"/register"} className='nav-item'>
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to={"/chatroom"} className='nav-item' >ChatRoom</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
