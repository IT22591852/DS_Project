import React from "react";
import "../../assets/styles/main.css";

const MenuItemCard = ({ item }) => (
  <div className="card">
    <h4>{item.name}</h4>
    <p>{item.description}</p>
    <p><b>Price:</b> Rs. {item.price}</p>
    <p><b>Category:</b> {item.category}</p>
    <p><b>Available:</b> {item.isAvailable ? "Yes" : "No"}</p>
  </div>
);

export default MenuItemCard;
