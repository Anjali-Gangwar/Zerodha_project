import axios from "axios";

const API_HOLDINGS = axios.create({
  baseURL: "https://zerodha-project-ds5v.onrender.com",
  withCredentials: true,
});

API_HOLDINGS.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API_HOLDINGS;
