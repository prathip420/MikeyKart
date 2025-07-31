import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
// import './App.css'; // Ensure this is imported

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">🛍 Moon</Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          {isLoggedIn ? (
            <>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
              <Link to="/order-history" className="nav-link">Orders</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </nav>

      {/* Floating Cart Icon */}
      {isLoggedIn && (
        <button className="floating-cart-btn" onClick={() => navigate('/cart')}>
          <FaShoppingCart />
        </button>
      )}
    </>
  );
};

export default Navbar;
