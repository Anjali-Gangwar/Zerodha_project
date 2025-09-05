import axios from "axios";

// Base API setup
const API = axios.create({
  baseURL: "https://zerodha-project-ds5v.onrender.com", // backend port + auth route
  withCredentials: true, // agar cookies/token use ho
});

// Token agar localStorage me ho to har request ke sath bhejo
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
