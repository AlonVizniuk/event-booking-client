// src/services/api.js
import axios from "axios";

/**
 * Base URL of your backend.
 * In dev, it’s usually http://localhost:5000/api
 * In production, swap in your deployed server URL.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/** Create a reusable Axios instance */
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,            // 10 s timeout
});

/** Attach JWT token (if stored) to every request */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/**
 * OPTIONAL: Lightweight wrapper helpers so you can write
 *   api.get("/events")      → apiFetch.get("/events")
 */
export const apiFetch = {
  get:  (url, cfg) => api.get(url, cfg).then((r) => r.data),
  post: (url, body, cfg) => api.post(url, body, cfg).then((r) => r.data),
  put:  (url, body, cfg) => api.put(url, body, cfg).then((r) => r.data),
  del:  (url, cfg) => api.delete(url, cfg).then((r) => r.data),
};

export default api;