import React from "react";
import "./style.css";
import pic from "../taxi-driver.png";
const Navbar = () => {
  return (
    <div className="flex navbar">
      <h1>Taxi Driver</h1>
      <div className="flex center profile">
        <p>Admin</p>
        <img src={pic} alt="Profile Picture" />
      </div>
    </div>
  );
};

export default Navbar;
