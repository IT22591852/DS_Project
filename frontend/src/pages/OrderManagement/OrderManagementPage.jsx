import React, { useEffect, useState } from "react";
import { fetchOrders, updateOrderStatus } from "../../api/restaurantApi";
import OrderStatusBadge from "../../components/OrderStatusBadge/OrderStatusBadge";
import useAuth from "../../hooks/useAuth";

const OrderManagementPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders(user.restaurantId, user.token).then(res => setOrders(res.data.data));
  }, [user]);

  const handleStatusChange = async (orderId, status) => {
    await updateOrderStatus(orderId, status, user.token);
    setOrders(orders.map(o => o._id === orderId ? { ...o, status } : o));
  };

  return (
    <div>
      <h2>Order Management</h2>
      {orders.map(order => (
        <div className="card" key={order._id}>
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Status:</b> <OrderStatusBadge status={order.status} /></p>
          <button onClick={() => handleStatusChange(order._id, "Confirmed")}>Confirm</button>
          <button onClick={() => handleStatusChange(order._id, "Preparing")}>Prepare</button>
          <button onClick={() => handleStatusChange(order._id, "Ready")}>Ready</button>
        </div>
      ))}
    </div>
  );
};
export default OrderManagementPage;
