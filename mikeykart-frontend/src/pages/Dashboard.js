// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to MikeyKart 🎉</h2>
      <p>Select a category or view our products below:</p>
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default Dashboard;
