import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold">Zynofusion</Link>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="ml-4">Logout</button>
        ) : (
          <>
            <Link to="/" className="ml-4">Login</Link>
            <Link to="/signup" className="ml-4">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}