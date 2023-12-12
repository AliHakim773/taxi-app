import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
export const Sidebar = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const [elements, setElements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      setDisplay(false);
    } else setDisplay(true);
  }, [location.pathname]);
  return display ? (
    <div className="sidebar flex column">
      <ul class="main-list">
        <li>
          Dashboards
          <ul class="sub-list">
            <li onClick={() => navigate("/drivers")}>Drivers</li>
            <li onClick={() => navigate("/passengers")}>Passengers</li>
          </ul>
        </li>
        <li onClick={() => navigate("/analytics")}>Analytics</li>
      </ul>
    </div>
  ) : (
    <></>
  );
};
