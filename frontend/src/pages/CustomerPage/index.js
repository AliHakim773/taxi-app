import React from "react";
import "./styles.css";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import CustomerRequest from "../../components/CustomerPage/CustomerRequest";
import AvailableDrivers from "../../components/CustomerPage/AvailableDrivers";
import CustomerMap from "../../components/CustomerPage/CustomerMap";
import AcceptedRequest from "../../components/CustomerPage/AcceptedRequest";
import DriveFinished from "../../components/CustomerPage/DriveFinished";
import RejectedRequest from "../../components/CustomerPage/RejectedRequest";
import RequestSent from "../../components/CustomerPage/RequestSent";
function CustomerPage() {
  return (
    <div>
      <NavBar />
      <div className="customer-interaction">
        <CustomerRequest />
        <CustomerMap />
      </div>
      <AvailableDrivers />
      <RequestSent />
      <AcceptedRequest />
      <RejectedRequest />
      <DriveFinished />
      <Footer />
    </div>
  );
}

export default CustomerPage;