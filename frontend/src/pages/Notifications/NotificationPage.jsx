import React, { useEffect, useState } from "react";
import { getNotifications } from "../../api/restaurantApi";
import { useAuth } from "../../hooks/useAuth";

const NotificationPage = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications(user.restaurantId)
      .then(res => setNotifications(res.data.data))
      .catch(() => setNotifications([]));
  }, [user]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Order Notifications</h1>
      <div className="space-y-4">
        {notifications.map(order => (
          <div key={order._id} className="bg-white shadow rounded p-4">
            <div className="font-semibold">Order from: {order.customer?.name}</div>
            <div className="text-gray-600">Items: {order.items.map(i => i.name).join(", ")}</div>
            <div className="text-sm text-gray-500">Status: {order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
