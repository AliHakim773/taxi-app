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
      <div className="profile-info">
        <div className="info-left">
          <img src="/driver.png" alt="" />
          <h3>{driver.name}</h3>
        </div>
      </div>
    </div>
  );
};
