import React from "react";
import "../../assets/styles/main.css";

const OrderStatusBadge = ({ status }) => (
  <span className={`status-badge ${status}`}>{status}</span>
);

export default OrderStatusBadge;
