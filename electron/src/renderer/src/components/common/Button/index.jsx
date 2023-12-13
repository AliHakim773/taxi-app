import React from "react";
import "./styles.css";
// import { useNavigate } from "react-router";

const Button = ({ text, handleOnClick, type, className }) => {
  return (
    <button
      type={type}
      className={`btn btn-primary ${className} `}
      onClick={() => {
        handleOnClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
