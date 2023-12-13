import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import { orders } from "../../core/mockData";
import "./style.css";
export const OrdersTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(orders);
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
          <th className="table-header" colSpan="8">
            Orders
          </th>
        </tr>
        <tr>
          <th>Order ID</th>
          <th>Passenger</th>
          <th>Picked up</th>
          <th>Drop off</th>
          <th>Ride Time</th>
          <th>Date</th>
          <th>Status</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {users.map((order, index) => (
          <tr key={index}>
            <td>{order.orderId}</td>
            <td className="img-name">
              <img src="" alt="" />
              {order.passenger}
            </td>
            <td>{order.picked_up}</td>
            <td>{order.drop_off}</td>
            <td>{order.ride_time}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>{order.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
