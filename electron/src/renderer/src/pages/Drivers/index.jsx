import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { DriverRequests } from "../../components/DriverRequests";
import { CurrentUsersTable } from "../../components/CurrentUsersTable";
export const Drivers = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers();
    const token = localStorage.getItem("token");
    const header = {
      Authorization: token,
    };

    if (!token) {
      console.error("Token not available");
      setIsLoggedIn(false);
      return;
    }
  }, [location.pathname]);

  return (
    <div className="content-container">
      <h1>Drivers</h1>
      <DriverRequests />
      <CurrentUsersTable />
    </div>
  );
};
