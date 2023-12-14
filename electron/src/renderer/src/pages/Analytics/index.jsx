import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { BackButton } from "../../components/common/BackButton";
import { drivers } from "../../core/mockData";
// import "./style.css";
import { AnalyticCart } from "../../components/common/AnalyticCart";
import { PassengerInfo } from "../../components/PassengerInfo/PassengerInfo";
export const Analytics = () => {
  return (
    <div className="content-container">
      <BackButton />
      <div className="analytics-wrapper">
        <h1>Analytics</h1>
        <div className="flex cards-row">
          <AnalyticCart title="Total Orders" amount="10" />
          <AnalyticCart title="Total Drivers" percent="10%" amount="10" />
          <AnalyticCart title="Orders/Month" percent="10%" amount="10" />
          <AnalyticCart title="Cancelled Orderes" percent="10%" amount="10" />
        </div>

        <div className="flex cards-row">
          <AnalyticCart className={"cart-sm-h"} title="Distance Travelled/Day" percent="10%" amount="10" />
          <AnalyticCart className={"cart-sm-h"} title="Distance Travelled/Month" percent="10%" amount="10" />
          <AnalyticCart className={"cart-sm-h"} title="Total Distance Travelled" percent="10%" amount="10" />
          <AnalyticCart className={"cart-sm-h"} title="Average trip time" percent="10%" amount="10" />
        </div>
      </div>
    </div>
  );
};
