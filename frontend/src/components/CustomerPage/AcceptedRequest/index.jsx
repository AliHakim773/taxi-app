import React from "react";
import "./styles.css";
import Loader from "../Loader";
function AcceptedRequest() {
  return (
    <div className="accepted-request">
      <p>Driver accepred your request and is on the way!</p>
      <Loader />
    </div>
  );
}

export default AcceptedRequest;
