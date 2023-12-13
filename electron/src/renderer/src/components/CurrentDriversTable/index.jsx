import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import { drivers } from "../../core/mockData";
import "./style.css";
import { useNavigate } from "react-router";
export const CurrentDriversTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const handleAccept = () => {
    // alert("Driver Accepted");
  };

  useEffect(() => {
    setUsers(drivers);
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
  const driverId = 6
  return (
    <table>
      <thead>
        <tr>
          <th className="table-header" colSpan="7">
            Current Drivers
          </th>
        </tr>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Car</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((driver, index) => (
          <tr key={index}>
            <td>{driver.Id}1</td>
            <td>{driver.name}</td>
            <td>{driver.email}</td>
            <td>{driver.car}</td>

            <td className="status flex">
              <Button text={"View"} handleOnClick={() => navigate("/viewDriver")} type={"submit"} className="accept-btn" />
              <Button className={"accept-btn"} text={"Chat"} handleOnClick={() => navigate(`/chat/${driverId}`)} type={"submit"} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
