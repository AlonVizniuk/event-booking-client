import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const mockEvents = [
  {
    id: 1,
    name: "Tech Conference 2025",
    description: "A gathering of the brightest tech minds.",
    date: "2025-07-01T18:00:00",
    totalSeats: 50,
  },
  {
    id: 2,
    name: "Music Festival",
    description: "A night of fun, rhythm, and vibes.",
    date: "2025-07-10T20:00:00",
    totalSeats: 100,
  },
];

export default function BookEvent() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [seatNumber, setSeatNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const event = mockEvents.find((e) => e.id === parseInt(eventId));

  const handleBooking = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const seat = parseInt(seatNumber);
    if (!seat || seat < 1 || seat > event.totalSeats) {
      setError(`Please choose a seat between 1 and ${event.totalSeats}`);
      return;
    }

    // TODO: Replace with real API call
    setSuccess(`Seat ${seat} booked successfully!`);
    setTimeout(() => navigate("/events"), 2000);
  };

  if (!event) {
    return <p className="text-center text-red-600 mt-10">Event not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2 text-blue-700">{event.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{event.description}</p>
      <p className="text-sm text-gray-500 mb-2">
        Date: {new Date(event.date).toLocaleString()}
      </p>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Seat Number</label>
          <input
            type="number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder={`1 - ${event.totalSeats}`}
            min={1}
            max={event.totalSeats}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
