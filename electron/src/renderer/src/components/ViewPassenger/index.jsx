import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../common/BackButton";
import { drivers } from "../../core/mockData";
import { AnalyticCart } from "../common/AnalyticCart";
import { OrdersTable } from "../OrdersTable";
import { PassengerInfo } from "../PassengerInfo/PassengerInfo";
export const ViewPassenger = () => {
  const { id } = useParams();

  return (
    <div className="content-container">
      <BackButton />
      <PassengerInfo id={id} />
      <div className="flex cards-row">
        <AnalyticCart title="Orders/Day" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Month" percent="10%" amount="10" />
        <AnalyticCart title="Total Orders" percent="10%" amount="10" />
        <AnalyticCart title="Cancelled Orderes" percent="10%" amount="10" />
      </div>

      <div className="flex cards-row">
        <AnalyticCart className={"cart-sm-h"} title="Distance Travelled/Day" percent="10%" amount="10" />
        <AnalyticCart className={"cart-sm-h"} title="Distance Travelled/Month" percent="10%" amount="10" />
        <AnalyticCart className={"cart-sm-h"} title="Total Distance Travelled" percent="10%" amount="10" />
        <AnalyticCart className={"cart-sm-h"} title="Average trip time" percent="10%" amount="10" />
      </div>
    </div>
  );
};
