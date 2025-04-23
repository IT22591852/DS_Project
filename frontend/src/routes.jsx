import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RestaurantProfilePage from "./pages/RestaurantProfile/RestaurantProfilePage";
import MenuManagementPage from "./pages/Menu/MenuPage";
import OrderManagementPage from "./pages/OrderManagement/OrderManagementPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import useAuth from "./hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    
    <Route path="/" element={
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    } />
    
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    } />
    
    <Route path="/profile" element={
      <ProtectedRoute>
        <RestaurantProfilePage />
      </ProtectedRoute>
    } />
    
    <Route path="/menu" element={
      <ProtectedRoute>
        <MenuManagementPage />
      </ProtectedRoute>
    } />
    
    <Route path="/orders" element={
      <ProtectedRoute>
        <OrderManagementPage />
      </ProtectedRoute>
    } />
    
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
