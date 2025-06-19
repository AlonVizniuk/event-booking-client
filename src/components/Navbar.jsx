import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EventBook
        </Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-600">Events</Link>

          {!isAuthenticated && (
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          )}

          {isAuthenticated && user?.role === "admin" && (
            <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
          )}

          {isAuthenticated && (
            <>
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline ml-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
