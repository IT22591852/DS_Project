import axios from "axios";
const API_BASE = "http://localhost:5001/api";

// Restaurant
export const fetchRestaurants = () => axios.get(`${API_BASE}/restaurants`);
export const fetchRestaurant = id => axios.get(`${API_BASE}/restaurants/${id}`);
export const updateRestaurant = (id, data, token) =>
  axios.put(`${API_BASE}/restaurants/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Menu
export const fetchMenuItems = restaurantId =>
  axios.get(`${API_BASE}/restaurants/${restaurantId}/menu`);
export const addMenuItem = (restaurantId, data, token) =>
  axios.post(`${API_BASE}/restaurants/${restaurantId}/menu`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Orders
export const fetchOrders = (restaurantId, token) =>
  axios.get(`${API_BASE}/restaurants/${restaurantId}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateOrderStatus = (orderId, status, token) =>
  axios.put(`${API_BASE}/orders/${orderId}/status`, { status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
