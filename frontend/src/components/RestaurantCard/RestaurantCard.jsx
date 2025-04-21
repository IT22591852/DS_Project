import React from "react";
import "../../assets/styles/main.css";

const RestaurantCard = ({ restaurant }) => (
  <div className="card">
    <h3>{restaurant.name}</h3>
    <p>{restaurant.description}</p>
    <p><b>Address:</b> {restaurant.address?.street}, {restaurant.address?.city}</p>
    <p><b>Cuisine:</b> {restaurant.cuisine?.join(", ")}</p>
    <p><b>Available:</b> {restaurant.isAvailable ? "Yes" : "No"}</p>
  </div>
);

export default RestaurantCard;
