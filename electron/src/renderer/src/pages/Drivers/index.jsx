import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { drivers } from "../../core/mockData";
import Button from "../../components/common/Button";
export const Drivers = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  //   const [tableHeads, setTableHeads] = useState([]);
  useEffect(() => {
    // if (location.pathname == "drivers") {
    //   setTableHeads(true);
    // } else if (location.pathname == "passengers") {
    //   setTableHeads(false);
    // }
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
  const handleAccept = () => {
    alert("Driver Accepted");
  };
  return (
    <div className="content-container">
      <h1>Drivers</h1>
      <table>
        <thead>
          <tr>
            <th className="table-header" colspan="7">
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
    </div>
  );
};
