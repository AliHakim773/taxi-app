import React from "react";
import "./style.css";
export const AnalyticCart = ({ title, percent, amount }) => {
  return (
    <div className="card flex column">
      <div className="card-top flex">
        <h3>{title}</h3>
        <p>{percent}</p>
      </div>
      <p>{amount}</p>
    </div>
  );
};
