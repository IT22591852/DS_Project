import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RestaurantProfilePage from "./pages/RestaurantProfile/RestaurantProfilePage";
import MenuManagementPage from "./pages/MenuManagement/MenuManagementPage";
import OrderManagementPage from "./pages/OrderManagement/OrderManagementPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/profile" element={<RestaurantProfilePage />} />
    <Route path="/menu" element={<MenuManagementPage />} />
    <Route path="/orders" element={<OrderManagementPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
