import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router";
import { SidebarItem } from "../SidebarItem";
import { adminElements } from "../../../core/sideBarItems";

export const Sidebar = () => {
  const location = useLocation();
  const [display, setDisplay] = useState(true);
  const [elements, setElements] = useState([]);
  useEffect(() => {
    if (location.pathname == "/") {
      setDisplay(false);
    } else setDisplay(true);
    setElements(adminElements);
  }, [location.pathname]);
  return display ? (
    <div className="sidebar flex column">
      <ul className="sidebuttons flex column ">
        {elements.map((element) => (
          <SidebarItem item={element} key={element.text} />
        ))}
        ;
      </ul>
    </div>
  ) : (
    <></>
  );
};
