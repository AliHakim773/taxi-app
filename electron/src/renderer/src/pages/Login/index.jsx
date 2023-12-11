import React from "react";
import LoginForm from "../../components/LoginForm";
import "./styles.css";
const Login = () => {
  return (
    <div className="page flex center column">
      <h1 className="admin-login-title">Taxi App</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
