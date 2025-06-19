import { apiFetch } from "./api";

export const loginUser = (email, password) =>
  apiFetch.post("/auth/login", { email, password });

export const registerUser = (name, email, password) =>
  apiFetch.post("/auth/register", { name, email, password });
