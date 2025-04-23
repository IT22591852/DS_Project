import React, { useEffect, useState } from "react";
import { getRestaurant } from "../../api/restaurantApi";
import useAuth  from "../../hooks/useAuth";

const DashboardPage = () => {
  const { user } = useAuth();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Assume user.restaurantId is available after login
    getRestaurant(user.restaurantId)
      .then(res => setRestaurant(res.data.data))
      .catch(() => setRestaurant(null));
  }, [user]);

  if (!restaurant) return <div className="p-8">Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={restaurant.images?.banner} alt="Banner" className="rounded shadow w-full h-64 object-cover" />
        </div>
        <div>
          <div className="mb-2"><span className="font-semibold">Description:</span> {restaurant.description}</div>
          <div className="mb-2"><span className="font-semibold">Cuisine:</span> {restaurant.cuisine.join(", ")}</div>
          <div className="mb-2"><span className="font-semibold">Contact:</span> {restaurant.contactInfo.phone} / {restaurant.contactInfo.email}</div>
          <div className="mb-2"><span className="font-semibold">Address:</span> {restaurant.address.street}, {restaurant.address.city}</div>
          <div className="mb-2"><span className="font-semibold">Availability:</span> {restaurant.isAvailable ? "Open" : "Closed"}</div>
        </div>
      </div>
      {/* Add CRUD buttons/modal for updating restaurant info */}
    </div>
  );
};

export default DashboardPage;
