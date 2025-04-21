import React, { useEffect, useState } from "react";
import { fetchRestaurants } from "../../api/restaurantApi";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/sidebar";

const DashboardPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurants().then(res => setRestaurants(res.data.data));
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1 }}>
          <h2>My Restaurants</h2>
          {restaurants.map(r => (
            <RestaurantCard key={r._id} restaurant={r} />
          ))}
        </main>
      </div>
    </>
  );
};
export default DashboardPage;
