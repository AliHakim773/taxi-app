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
  const HandleOnInputChange = () => {
    console.log("Handle On Change Called");
  };
  return (
    <div className="info flex center">
      <form className="reg-form">
        <div className="registerform-pair flex center">
          <label htmlFor="">Id</label>
          <InputField type={"text"} name={"name"} text={"Name"} value={driver.Id} handleChange={HandleOnInputChange} />
          <label htmlFor="">Name</label>
          <InputField type={"name"} name={"name"} text={"name"} value={driver.name} handleChange={HandleOnInputChange} />
        </div>
        <div className="registerform-pair flex center">
          <label htmlFor="">Email</label>
          <InputField
            type={"password"}
            name={"password"}
            text={"Password"}
            value={driver.email}
            handleChange={HandleOnInputChange}
          />
          <label htmlFor="">Password</label>

          <InputField
            type={"password"}
            name={"confirmPassword"}
            text={"Confirm Password"}
            value={driver.name}
            handleChange={HandleOnInputChange}
          />
        </div>

        <div className="registerform-pair flex center">
          <label htmlFor="">Car</label>

          <InputField type={"text"} name={"location"} text={"Location"} value={driver.name} handleChange={HandleOnInputChange} />
          <label htmlFor="">Status</label>

          <InputField
            type={"text"}
            name={"phone_number"}
            text={"Phone Number"}
            value={driver.name}
            handleChange={HandleOnInputChange}
          />
        </div>
      </form>
      <div className="flex column info-right">
        <img src="" alt="" />
        <Button className={"viewDriverButton"} buttonText="Submit" text={"Edit"} />
        <Button className={"viewDriverButton"} buttonText="Submit" text={"Delete"} />
      </div>
    </div>
  );
};
