import { apiFetch } from "./api";

export const bookEvent = (event_id) =>
  apiFetch.post("/bookings", { event_id });

export const getEventBookings = (event_id) =>
  apiFetch.get(`/bookings/event/${event_id}`);