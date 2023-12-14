import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../common/BackButton";
import { drivers } from "../../core/mockData";
import "./style.css";
import { AnalyticCart } from "../common/AnalyticCart";
import { OrdersTable } from "../OrdersTable";
import { UserInfo } from "../UserInfo";
import { requestData } from "../../core/axios";
export const ViewDriver = () => {
  const { id } = useParams();
  const [analytics, setAnalytics] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = {
      Authorization: token,
    };

    if (!token) {
      console.error("Token not available");
      return;
    }

    const driver_analytics = async () => {
      try {
        const results = await requestData("driver_analytics", "post", { id }, header);
        setAnalytics(results);
        console.log(results);
      } catch (e) {
        console.log(e);
      }
    };
    driver_analytics();
  }, []);
  return (
    <div className="content-container">
      <BackButton />
      <UserInfo id={id} />
      <div className="flex cards-row">
        <AnalyticCart title="Orders/Day" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Month" percent="10%" amount="10" />
        <AnalyticCart title="Total Orders" percent="10%" amount="10" />
        <AnalyticCart title="Cancelled Orderes" percent="10%" amount="10" />
      </div>
      <div className="flex cards-row">
        <AnalyticCart title="Profit/Day" percent="10%" amount="10" />
        <AnalyticCart title="Profit/Month" percent="10%" amount="10" />
        <AnalyticCart title="Total profit" percent="10%" amount="10" />
        <AnalyticCart title="Average Rating" percent="10%" amount="10" />
      </div>
      <div className="flex cards-row">
        <AnalyticCart className={"cart-sm-h"} title="Distance Travelled/Day" percent="10%" amount="10" />
        <AnalyticCart className={"cart-sm-h"} title="Distance Travelled/Month" percent="10%" amount="10" />
        <AnalyticCart className={"cart-sm-h"} title="Total Distance Covered" percent="10%" amount="10" />
        <AnalyticCart className={"cart-sm-h"} title="Average trip time" percent="10%" amount="10" />
      </div>
      <OrdersTable id={id} />
    </div>
  );
};
