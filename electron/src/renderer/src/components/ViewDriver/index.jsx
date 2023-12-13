import React from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../common/BackButton";
import { drivers } from "../../core/mockData";
import "./style.css";
import { AnalyticCart } from "../common/AnalyticCart";
import { OrdersTable } from "../OrdersTable";
import { UserInfo } from "../UserInfo";
export const ViewDriver = () => {
  const { id } = useParams();

  return (
    <div className="content-container">
      <BackButton />
      <UserInfo id={id} />
      <div className="flex cards-row">
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
      </div>
      <div className="flex cards-row">
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
      </div>
      <div className="flex cards-row">
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
        <AnalyticCart title="Orders/Today" percent="10%" amount="10" />
      </div>
      <OrdersTable></OrdersTable>
    </div>
  );
};
