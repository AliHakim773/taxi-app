import React from "react";
import "./styles.css";
function CustomerRequest({ setCurrentBtn }) {
  const handleClick = () => {
    setCurrentBtn(true);
  };
 
  return (
    <div className="customer-request">
      <h2 className="request-title">Request a drive</h2>
      <form>
        <div className="form-row">
          <input
            type="text"
            id="from-location"
            name="from-location"
            placeholder="Enter Pick-up Location:"
            required
          />
          <button
            className="btn-animated current-location_btn"
            onClick={handleClick}
          >
            <span class="btn__visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2c-4.418 0-8 3.582-8 8 0 4.42 6 14 8 14s8-9.58 8-14c0-4.418-3.582-8-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="btn__invisible">Current Location</span>
          </button>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="from-location"
            name="from-location"
            placeholder="Enter Destination:"
            required
          />
          <button className="btn-animated current-location_btn">
            <span className="btn__visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.59 7.77l-5.59-5.59a2 2 0 0 0-2.83 0L2 15.59a1 1 0 0 0-.29.71l-1 5a1 1 0 0 0 1 1l5-1a1 1 0 0 0 .71-.29l13.41-13.41a2 2 0 0 0 0-2.83zM7 19l.81-4.05m2.68-2.68L19 8" />
              </svg>
            </span>
            <span className="btn__invisible">Choose on map</span>
          </button>
        </div>
        <div className="form-row">
          <h2>Select Pick-up area:</h2>
          <select id="area-select">
            <option value="beirut">Beirut</option>
            <option value="tripoli">Tripoli</option>
            <option value="batroun">Batroun</option>
            <option value="sayda">Sayda</option>
            <option value="chouf">Chouf</option>
            <option value="south">South</option>
          </select>
        </div>
        <button className="order-btn">Order Ride</button>
      </form>
    </div>
  );
}

export default CustomerRequest;
