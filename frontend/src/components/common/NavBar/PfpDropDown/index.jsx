import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

const PfpDropDown = ({ isHidden }) => {
    return (
        <div className={isHidden ? "pfp-drop-down" : "pfp-drop-down pfp-show"}>
            <Link className='pfp-drop-down-item'>Edit Profile</Link>
            <Link className='pfp-drop-down-item'>Log out</Link>
        </div>
    )
}

export default PfpDropDown
