import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../common/BackButton";
import { drivers } from "../../core/mockData";
import "./style.css";

export const ViewDriver = () => {
  const { id } = useParams();
  const parsedId = parseInt(id, 10);
  const driver = drivers.find((driver) => driver.Id === parsedId);

  if (!driver) {
    return <div>No driver found</div>;
  }

  return (
    <div className="content-container">
      <BackButton />
      <div className="profile-info flex">
        <div className="form">
          <div className=" field  ">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={driver.email} />
          </div>
          <div className="field">
            <label htmlFor="password">password</label>
            <input type="text" name="password" value={driver.password} />
          </div>
          <div className="field">
            <label htmlFor="password">location</label>
            <input type="text" name="location" value={driver.location} />
          </div>
          <div className="field">
            <label htmlFor="name">car</label>
            <input type="text" name="car" value={driver.car} />
          </div>
          <div className="field">
            <label htmlFor="contact">status</label>
            <input type="text" name="status" value={driver.status} />
          </div>
        </div>
        <div className="info-left">
          <img src="/driver.png" alt="" />
          <h3>{driver.name}</h3>
        </div>
      </div>
    </div>
  );
};
