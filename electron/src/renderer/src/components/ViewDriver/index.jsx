import React from "react";
import "./style.css";
export const ViewDriver = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="content-container">
      {" "}
      <button className="previous" onClick={goBack}>
        &#8249;
      </button>
    </div>
  );
};
