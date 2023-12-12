import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export const SidebarItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="sb-item" onClick={() => navigate(item.route)}>
      {item.text}
    </div>
  );
};
