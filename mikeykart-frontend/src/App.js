import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // ✅ Import the global CSS here

import Login from './pages/Login';
import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistory from './pages/OrderHistory';
import HomePage from './pages/HomePage';     // 🆕
import AboutPage from './pages/AboutPage';   // 🆕
import ContactPage from './pages/ContactPage'; // 🆕
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const hideNavbarOnRoutes = ['/login', '/register'];
  const showNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* 🔓 Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* 🔐 Protected Routes */}
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-history"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
