import axios from "axios";

// Base API setup
const API = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "https://zerodha-project-ds5v.onrender.com/api/auth" // deployed backend
    : "http://localhost:3002/api/auth", 
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
