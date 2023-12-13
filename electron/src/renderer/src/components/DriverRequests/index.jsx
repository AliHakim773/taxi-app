import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import { drivers } from "../../core/mockData";
export const DriverRequests = () => {
  const [users, setUsers] = useState([]);
  const handleAccept = () => {
    alert("Driver Accepted");
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
  return (
    <table>
      <thead>
        <tr>
          <th className="table-header" colSpan="7">
            Potential Driver Requests
          </th>
        </tr>
        <tr>
          <th>Driver</th>
          <th>Email</th>
          <th>Location</th>
          <th>Car</th>
          <th>Color</th>
          <th>Plate</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((driver, index) => (
          <tr key={index}>
            <td className="img-name">
              <img src="" alt="" />
              {driver.name}
            </td>
            <td>{driver.email}</td>
            <td>{driver.location}</td>
            <td>{driver.car}</td>
            <td>{driver.color}</td>
            <td>{driver.plateNumber}</td>
            <td className="status flex">
              <Button text={"Accept"} handleOnClick={() => handleAccept()} type={"submit"} className="accept-btn" />
              <Button className={"accept-btn"} text={"Deny"} handleOnClick={() => handleAccept()} type={"submit"} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
