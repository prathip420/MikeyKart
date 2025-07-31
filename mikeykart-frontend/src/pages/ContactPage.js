import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📨 Your message has been sent! (Demo only)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">📞 Contact Us</h1>
        <p className="contact-subtitle">Have questions or feedback? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="store-details">
          <h4>📍 MikeyKart HQ</h4>
          <p>123 Market Street, Bengaluru, India</p>
          <p>📧 support@moon.com</p>
          <p>📱 +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
