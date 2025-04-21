import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/main.css";

const Navbar = () => (
  <nav>
    <div>
      <b>Foodiego Restaurant Admin</b>
    </div>
    <div>
      <Link to="/dashboard" style={{ color: "#fff", marginRight: 16 }}>Dashboard</Link>
      <Link to="/profile" style={{ color: "#fff", marginRight: 16 }}>Profile</Link>
      <Link to="/orders" style={{ color: "#fff" }}>Orders</Link>
    </div>
  </nav>
);

export default Navbar;
