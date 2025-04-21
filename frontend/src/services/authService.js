import axios from "axios";
const API_BASE = "http://localhost:5001/api/auth";

export const login = async (email, password) => {
  const res = await axios.post(`${API_BASE}/login`, { email, password });
  return { ...res.data, token: res.data.token };
};

export const register = async ({ name, email, password }) => {
  const res = await axios.post(`${API_BASE}/register`, { name, email, password });
  return { ...res.data, token: res.data.token };
};
