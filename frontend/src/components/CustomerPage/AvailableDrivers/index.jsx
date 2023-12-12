import React from "react";
import "./styles.css";
function AvailableDrivers() {
  let drivers = [
    {
      id: 1,
      img_url: "https://i.pravatar.cc/200?u=118836",
      name: "Ahmad",
      color: "blue",
      car: "nissan tida",
      price: "15$",
      eta: "10min",
    },
    {
      id: 1,
      img_url: "https://i.pravatar.cc/200?u=118836",
      name: "Ahmad",
      color: "blue",
      car: "nissan tida",
      price: "15$",
      eta: "10min",
    },
    {
      id: 1,
      img_url: "https://i.pravatar.cc/200?u=118836",
      name: "Ahmad",
      color: "blue",
      car: "nissan tida",
      price: "15$",
      eta: "10min",
    },
  ];
  return (
    <div className="available-drivers">
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Car</th>
            <th>Price</th>
            <th>ETA</th>
            <th></th>
          </tr>
          {drivers.map((driver) => {
            return (
              <tr key={driver.id}>
                <td>
                  <div className="driver-info">
                    <img src={driver.img_url} alt={driver.name} />
                    <p>{driver.name}</p>
                  </div>
                </td>
                <td>
                  {driver.color} {driver.car}
                </td>
                <td>{driver.price}</td>
                <td>{driver.eta}</td>
                <button className="select-driver_btn">Select</button>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default AvailableDrivers;
