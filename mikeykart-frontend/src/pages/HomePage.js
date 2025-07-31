import React from 'react';
// import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Welcome to Moon 🛍️</h1>
        <p>Shop trending electronics, fashion, and more!</p>
        <Link to="/products">
          <button className="shop-btn">Start Shopping</button>
        </Link>
      </div>

      <div className="featured-section">
        <h2>✨ Featured Products</h2>
        <div className="featured-grid">
          <div className="featured-item">iPhone 15 Pro</div>
          <div className="featured-item">Sony PS5</div>
          <div className="featured-item">Smart Watch</div>
        </div>
      </div>

      <div className="category-section">
        <h2>🗂️ Shop by Category</h2>
        <div className="category-grid">
          <div className="category-item">Mobiles</div>
          <div className="category-item">Laptops</div>
          <div className="category-item">Fashion</div>
          <div className="category-item">Accessories</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
