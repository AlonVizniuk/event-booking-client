import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const mockEvents = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-07-01T18:00:00",
    description: "A gathering of the brightest tech minds.",
    availableSeats: 30,
  },
  {
    id: 2,
    name: "Music Festival",
    date: "2025-07-10T20:00:00",
    description: "A night of fun, rhythm, and vibes.",
    availableSeats: 50,
  },
];

export default function Events() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="space-y-6">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold text-blue-600">{event.name}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500">
              Date: {new Date(event.date).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Available Seats: {event.availableSeats}
            </p>
            {isAuthenticated ? (
              <Link
                to={`/book/${event.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Book Now
              </Link>
            ) : (
              <p className="text-red-500 text-sm">Login to book a seat</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
