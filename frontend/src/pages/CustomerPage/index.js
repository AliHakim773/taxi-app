import React from "react";
import "./styles.css";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";
import CustomerRequest from "../../components/CustomerPage/CustomerRequest";
import AvailableDrivers from "../../components/CustomerPage/AvailableDrivers";
import CustomerMap from "../../components/CustomerPage/CustomerMap";
function CustomerPage() {
  return (
    <div>
      <NavBar />
      <CustomerRequest />
      <AvailableDrivers />
      <CustomerMap />
      <Footer />
    </div>
  );
}

export default CustomerPage;