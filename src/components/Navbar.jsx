import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EventBook
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-600">Events</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
