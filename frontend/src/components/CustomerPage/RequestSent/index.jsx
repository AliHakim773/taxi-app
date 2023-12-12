import React from "react";
import "./styles.css";
import Loader from "../Loader";
function RequestSent() {
  return (
    <div className="accepted-request">
      <p>Request Sent kindly wait for driver's response shortly</p>
      <Loader />
      <button className="btn-animated refresh_btn">
        <span class="btn__visible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c2.602 0 5.082-1.016 6.938-2.862l-2.535-2.535C14.41 18.418 13.262 19 12 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8h-2l4 4 4-4h-2c0-5.514-4.486-10-10-10z" />
          </svg>
        </span>
        <span className="btn__invisible">REFRESH REQUEST</span>
      </button>
    </div>
  );
}

export default RequestSent;
