import React from 'react';
// import './ThankYouPage.css';
import { useNavigate } from 'react-router-dom';

function ThankYouPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/products');
  };

  return (
    <div className="thank-you-container">
      <h1>🎉 Thank You for Your Order!</h1>
      <p>Your order has been placed successfully.</p>
      <button onClick={goHome}>Continue Shopping</button>
    </div>
  );
}

export default ThankYouPage;
