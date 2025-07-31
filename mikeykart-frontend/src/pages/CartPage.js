import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      updateCart(updated);
    } else {
      removeItem(index);
    }
  };

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    updateCart(updated);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2 className="cart-heading">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, idx) => (
              <div className="cart-item-card" key={idx}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(idx)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(idx)}>+</button>
                </div>
                <p>Total: ₹{item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => removeItem(idx)}>Remove</button>
              </div>
            ))}
            <h3 className="total-price">Grand Total: ₹{totalPrice}</h3>
            <div className="cart-actions">
              <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
              <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
