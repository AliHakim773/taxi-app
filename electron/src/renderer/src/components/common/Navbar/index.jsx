import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { extractUserSlice, setUser } from "../../../core/redux/user/userSlice";
import { requestData } from "../../../core/axios";
import PfpDropDown from "./PfpDropDown";

const Navbar = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const dispatch = useDispatch();
  const userState = useSelector(extractUserSlice);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = {
      Authoruzation: token,
    };

    if (!token) {
      console.error("Token not available");
      setIsLoggedIn(false);
      return;
    }

    const refresh = async () => {
      try {
        const res = await requestData("refresh", "post", {}, header);
        if (res.status == "success") {
          localStorage.setItem("token", `Bearer ${res.authoruzation.token}`);
          dispatch(setUser(res.user));
          setIsLoggedIn(true);
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    if (location.pathname == "/") {
      setDisplay(false);
    } else setDisplay(true);
  }, [location.pathname]);

  const handleOnClickProfile = () => {
    setIsHidden((prev) => !prev);
  };
  return display ? (
    <div className="flex navbar">
      <h1>Taxi Driver</h1>
      <div className="flex center profile">
        <p>{userState.name}</p>
        <img
          src=""
          alt=""
          onClick={(e) => {
            handleOnClickProfile(e);
          }}
        />
        {/* <PfpDropDown isHidden={isHidden} setIsLoggedIn={setIsLoggedIn} /> */}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Navbar;
