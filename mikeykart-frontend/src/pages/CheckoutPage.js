// src/pages/Checkout.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const totalAmount = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, []);

  const handleCheckout = () => {
    const order = {
      orderId: `MK-${Date.now()}`,
      timestamp: new Date().toISOString(),
      items: cart,
      total,
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    localStorage.removeItem('cart');
    alert('🎉 Order placed successfully!');
    navigate('/order-history');
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-heading">🧾 Checkout</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <div className="checkout-container">
          <ul className="checkout-list">
            {cart.map((item, index) => (
              <li key={index} className="checkout-item">
                {item.name} — ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <hr />
          <p><strong>Subtotal:</strong> ₹{total}</p>
          <p><strong>GST (18%):</strong> ₹{(total * 0.18).toFixed(2)}</p>
          <p><strong>Total (incl. GST):</strong> ₹{(total * 1.18).toFixed(2)}</p>
          <button className="confirm-order-btn" onClick={handleCheckout}>
            ✅ Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
