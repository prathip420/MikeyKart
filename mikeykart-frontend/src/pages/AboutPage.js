import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">🛍️ Welcome to <span className="brand">Moon</span></h1>
        <p className="about-description">
          MikeyKart is your one-stop destination for the latest tech, trendy fashion, and everyday essentials.
          From mobiles to gaming consoles, watches to accessories — we bring top-quality products right to your doorstep.
        </p>
        <p className="about-description">
          💡 <strong>Why Moon?</strong><br />
          ✅ Trusted by thousands of shoppers<br />
          ✅ Lightning-fast delivery<br />
          ✅ Secure checkout & multiple payment options<br />
          ✅ 24/7 customer support
        </p>
        <p className="about-description">
          Thank you for choosing Moon. We’re committed to making your shopping experience joyful and hassle-free!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
