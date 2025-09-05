import axios from "axios";

const API_HOLDINGS = axios.create({
  baseURL: "http://localhost:3002/api/holdings",
  withCredentials: true,
});

API_HOLDINGS.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API_HOLDINGS;
