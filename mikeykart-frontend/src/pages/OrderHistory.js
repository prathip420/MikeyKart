// src/pages/OrderHistory.js
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.reverse());
  }, []);

  const formatDateTime = (timestamp) => {
    if (!timestamp) return 'Unknown Date';
    const date = new Date(timestamp);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const downloadInvoice = (order, index) => {
    const doc = new jsPDF();
    const margin = 15;
    const lineHeight = 10;
    let y = 20;

    // Header
    doc.setTextColor(33, 150, 243); // Blue
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('🧾 MikeyKart Invoice', margin, y);
    y += lineHeight;

    // Order Details
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'normal');
    doc.text(`Order ID: ${order.orderId || `MK-${index + 1001}`}`, margin, y);
    y += lineHeight;
    doc.text(`Date & Time: ${formatDateTime(order.timestamp)}`, margin, y);
    y += lineHeight;
    doc.text('GSTIN: 27AAPFU0939F1ZV', margin, y);
    y += lineHeight;

    doc.setDrawColor(100);
    doc.setLineWidth(0.3);
    doc.line(margin, y, 200, y);
    y += lineHeight;

    // Item Header
    doc.setTextColor(55, 71, 79);
    doc.setFont('helvetica', 'bold');
    doc.text('Items:', margin, y);
    y += lineHeight;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    order.items.forEach((item, idx) => {
      const total = item.price * item.quantity;
      const text = `${idx + 1}. ${item.name} — ₹${item.price} x ${item.quantity} = ₹${total}`;
      doc.setTextColor(50);
      doc.text(text, margin, y);
      y += lineHeight;
    });

    // Summary
    y += 4;
    doc.setDrawColor(100);
    doc.line(margin, y, 200, y);
    y += lineHeight;

    const gst = (order.total * 0.18).toFixed(2);
    const grandTotal = (order.total + parseFloat(gst)).toFixed(2);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Total Amount: ₹${order.total}`, margin, y);
    y += lineHeight;
    doc.text(`GST (18%): ₹${gst}`, margin, y);
    y += lineHeight;

    doc.setTextColor(0, 128, 0);
    doc.setFontSize(14);
    doc.text(`Grand Total: ₹${grandTotal}`, margin, y);
    y += lineHeight + 4;

    // Footer
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(11);
    doc.setTextColor(120);
    doc.text('Thank you for shopping with MikeyKart!', margin, y);

    doc.save(`MikeyKart_Invoice_Order${orders.length - index}.pdf`);
  };

  return (
    <div className="order-history-container">
      <h2 className="order-history-title">🧾 Order History</h2>
      {orders.length === 0 ? (
        <p className="order-history-empty">You have no past orders.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-box">
            <h3 className="order-box-title">🛍️ MikeyKart Invoice</h3>
            <p><strong>Order ID:</strong> {order.orderId || `MK-${index + 1001}`}</p>
            <p><strong>Date & Time:</strong> {formatDateTime(order.timestamp)}</p>
            <p><strong>Total Amount:</strong> ₹{order.total}</p>
            <p><strong>GST (18%):</strong> ₹{(order.total * 0.18).toFixed(2)}</p>
            <hr />
            <div className="order-items">
              {order.items.map((item, idx) => (
                <div key={idx}>
                  📦 {item.name} — ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                </div>
              ))}
            </div>
            <button
              onClick={() => downloadInvoice(order, index)}
              className="download-invoice-button"
            >
              📥 Download Invoice
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
