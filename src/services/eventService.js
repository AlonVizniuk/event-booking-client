import { apiFetch } from "./api";

export const getEvents = () => apiFetch.get("/events");
export const getEventById = (id) => apiFetch.get(`/events/${id}`);

// Admin-only
export const createEvent = (event) => apiFetch.post("/events", event);
export const deleteEvent = (id) => apiFetch.del(`/events/${id}`);