import React, { useState } from "react";
import "./styles.css";
import InputField from "../common/InputField";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const LoginForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const HandleOnChangeEmail = (e) => {
    setMail(e.target.value);
  };
  const HandleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    const response = await sendRequest({
      body: form,
      route: "/login",
      method: "POST",
    });
    console.log(response.status);

    if (response.status === "success" && response.token) {
      // console.log("HelloWOrld");
      localStorage.setItem("logged_in", true);
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);
      if (response.role === "admin") {
        navigate("/Admin");
      }
      if (response.role === "doctor") {
        navigate("/Doctor");
      }
      if (response.role === "patient") {
        navigate("/Patient");
      }
    }
  };
  return (
    <form className="login-form">
      <h2 className="form-title">Enter Admin Credentials</h2>
      <div className="form-body">
        <div className="email-field-wrapper">
          <InputField type={"email"} text={"Email"} value={mail} handleChange={HandleOnChangeEmail} />
        </div>
        <div className="password-field-wrapper">
          <InputField type={"password"} text={"Password"} value={password} handleChange={HandleOnChangePassword} />
        </div>
        <div className="btn-wrapper">
          <Button className="admin-login" text={"Login"} handleOnClick={handleLogin} type={"submit"} />

          <p>
            Don't have an account?
            <Link to={"/register"}>Register here.</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
