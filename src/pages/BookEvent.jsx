import { useParams } from "react-router-dom";

export default function BookEvent() {
  const { eventId } = useParams();
  return <h2 className="text-xl font-bold text-center">Booking Event ID: {eventId}</h2>;
}
