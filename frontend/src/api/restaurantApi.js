// src/api/restaurantApi.js
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api" });

// --- Restaurant ---
export const getRestaurant = (id) => API.get(`/restaurants/${id}`);
export const updateRestaurant = (id, data) => API.put(`/restaurants/${id}`, data);

// --- Menu ---
export const getMenuItems = (restaurantId) => API.get(`/restaurants/${restaurantId}/menu`);
export const addMenuItem = (restaurantId, data) => API.post(`/restaurants/${restaurantId}/menu`, data);
export const updateMenuItem = (id, data) => API.put(`/menus/${id}`, data);
export const updateMenuItemAvailability = (id, isAvailable) =>
  API.put(`/menus/${id}/availability`, { isAvailable });
export const deleteMenuItem = (id) => API.delete(`/menus/${id}`);

// --- Orders ---
export const fetchOrders = (restaurantId) => API.get(`/restaurants/${restaurantId}/orders`);
export const getOrders = (restaurantId) => API.get(`/restaurants/${restaurantId}/orders`);
export const getOrder = (id) => API.get(`/orders/${id}`);
export const updateOrderStatus = (orderId, status) =>
  API.put(`/orders/${orderId}/status`, { status });

// --- Notifications (using orders as notifications) ---
export const getNotifications = (restaurantId) => API.get(`/restaurants/${restaurantId}/orders`);

