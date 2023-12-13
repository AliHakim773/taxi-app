import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import { drivers } from "../../core/mockData";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
export const CurrentUsersTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("");

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
    if (location.pathname == "/drivers") {
      setPage("drivers");
    } else if (location.pathname == "/passengers") {
      setPage("passengers");
    }
  }, [location.pathname]);
  return (
    <table>
      <thead>
        <tr>
          <th className="table-header" colSpan="7">
            Current Drivers
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          {page === "drivers" && <th>Car</th>}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((driver, index) => (
          <tr key={index}>
            <td></td>
            <td>{driver.Id}</td>
            <td>{driver.name}</td>
            <td>{driver.email}</td>
            {page === "drivers" && <td>{driver.car}</td>}
            <td className="status flex">
              <Button
                text={"View"}
                handleOnClick={() => {
                  page === "drivers" ? navigate(`/viewDriver/${driver.Id}`) : navigate(`/viewPassenger/${driver.Id}`);
                }}
                type={"submit"}
                className="accept-btn"
              />
              <Button
                className={"accept-btn"}
                text={"Chat"}
                handleOnClick={() => navigate(`/chat/${driver.Id}`)}
                type={"submit"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
