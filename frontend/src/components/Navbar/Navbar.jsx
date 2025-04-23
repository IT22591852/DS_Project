import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow">
    <div className="font-bold text-xl">Restaurant Admin</div>
    <div className="space-x-6">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/menu" className="hover:underline">Menu</Link>
      <Link to="/orders" className="hover:underline">Orders</Link>
      <Link to="/notifications" className="hover:underline">Notifications</Link>
    </div>
  </nav>
);

export default Navbar;
