// src/components/CartIcon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function CartIcon() {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (

    <div className="floating-cart" onClick={() => navigate('/cart')}>
      <ShoppingCart className="cart-icon" />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>

  );
}

export default CartIcon;
