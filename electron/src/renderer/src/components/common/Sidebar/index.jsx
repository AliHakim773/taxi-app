import React from "react";
import "./style.css";
export const Sidebar = () => {
  return (
    <div className="sidebar flex column">
      <ul className="sidebuttons flex column ">
        <li>Drivers</li>
        <li>Passengers</li>
        <li> Analytics</li>
      </ul>
    </div>
  );
};
