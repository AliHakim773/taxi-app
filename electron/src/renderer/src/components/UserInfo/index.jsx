import React from "react";
import { drivers } from "../../core/mockData";
import InputField from "../common/InputField";
import Button from "../common/Button";
export const UserInfo = ({ id }) => {
  const parsedId = parseInt(id, 10);
  const driver = drivers.find((driver) => driver.Id === parsedId);

  if (!driver) {
    return <div>No driver found</div>;
  }
  const HandleOnInputChange = (e) => {
    console.log("Handle On Change Called");
  };
  return (
    <div className="info flex center">
      <img src="" alt="" />

      <form className="reg-form">
        <div className="registerform-pair flex center">
          <div className="left-inputs">
            <label htmlFor="id">Id</label>
            <InputField type={"text"} name={"id"} text={"Id"} value={driver.Id} handleChange={HandleOnInputChange} />
            <label htmlFor="email">Email</label>
            <InputField type={"email"} name={"email"} text={"Email"} value={driver.email} handleChange={HandleOnInputChange} />
            <label htmlFor="password">Password</label>
            <InputField
              type={"password"}
              name={"password"}
              text={"Password"}
              value={driver.password}
              handleChange={HandleOnInputChange}
            />
          </div>
          <div className="right-inputs">
            <label htmlFor="name">Name</label>
            <InputField type={"name"} name={"name"} text={"Name"} value={driver.name} handleChange={HandleOnInputChange} />
            <label htmlFor="Car">Car</label>
            <InputField type={"text"} name={"Car"} text={"Car"} value={driver.location} handleChange={HandleOnInputChange} />
            <label htmlFor="Status"> Status</label>
            <InputField type={"text"} name={"status"} text={"status "} value={driver.status} handleChange={HandleOnInputChange} />
          </div>
        </div>
      </form>
      <div className="flex column info-right">
        <Button className={"viewDriverButton"} buttonText="Submit" text={"Edit"} />
        <Button className={"viewDriverButton"} buttonText="Submit" text={"Delete"} />
      </div>
    </div>
  );
};
