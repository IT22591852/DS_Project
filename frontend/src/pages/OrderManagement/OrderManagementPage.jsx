import React, { useEffect, useState } from "react";
import { fetchOrders, updateOrderStatus } from "../../api/restaurantApi"; 
import OrderStatusBadge from "../../components/OrderStatusBadge/OrderStatusBadge";
import useAuth from "../../hooks/useAuth";

const OrderManagementPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.restaurantId) {
      fetchOrders(user.restaurantId)
        .then(res => setOrders(res.data.data))
        .catch(console.error);
    }
  }, [user]);

  const handleStatusChange = async (orderId, status) => {
    try {
      await updateOrderStatus(orderId, status);
      setOrders(orders.map(o => o._id === orderId ? { ...o, status } : o));
    } catch (err) {
      console.error("Failed to update order status:", err);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order._id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Order #{order._id.slice(-6)}</span>
              <OrderStatusBadge status={order.status} />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleStatusChange(order._id, "Confirmed")}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Confirm
              </button>
              <button
                onClick={() => handleStatusChange(order._id, "Preparing")}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Prepare
              </button>
              <button
                onClick={() => handleStatusChange(order._id, "Ready")}
                className="px-3 py-1 bg-green-500 text-white rounded"
              >
                Ready
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagementPage;
