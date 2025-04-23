import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../api/restaurantApi";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrder(id)
      .then(res => setOrder(res.data.data))
      .catch(() => setOrder(null));
  }, [id]);

  if (!order) return <div className="p-8">Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="bg-white rounded shadow p-6">
        <div className="mb-2"><span className="font-semibold">Customer:</span> {order.customer?.name}</div>
        <div className="mb-2"><span className="font-semibold">Status:</span> {order.status}</div>
        <div className="mb-2"><span className="font-semibold">Items:</span>
          <ul className="list-disc ml-6">
            {order.items.map(item => (
              <li key={item.menuItem}>{item.name} x {item.quantity} (Rs. {item.price})</li>
            ))}
          </ul>
        </div>
        <div className="mb-2"><span className="font-semibold">Total:</span> Rs. {order.total}</div>
        <div className="mb-2"><span className="font-semibold">Delivery Address:</span> {order.deliveryAddress?.street}, {order.deliveryAddress?.city}</div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
