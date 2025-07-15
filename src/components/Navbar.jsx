import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or plain text icons

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide text-white">
          Zynofusion
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:bg-gray-700 px-4 py-2 rounded-md transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/" className="hover:text-gray-300">Login</Link>
              <Link to="/signup" className="hover:text-gray-300">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-700">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-600 rounded-md transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-600 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 hover:bg-gray-600 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
