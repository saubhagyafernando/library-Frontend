import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // Toggle form visibility
  const handleButtonClick = () => {
    setShowForm(!showForm);
    setStatusMessage(''); // Reset the status message when toggling
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_om6dkmn',      // Replace with your Service ID
        'template_tjq35xn',     // Replace with your Template ID
        formRef.current,
        '7PQXzdBSaTTuYdC03'     // Replace with your Public Key
      )
      .then(() => {
        setStatusMessage('✅ Message sent successfully!');
        if (formRef.current) formRef.current.reset(); // Reset form fields after successful submission
      })
      .catch(() => {
        setStatusMessage('❌ Failed to send message. Try again later.');
      });
  };

  return (
    <div className="contact-us-container">
      <h1 className="text-center">Contact Us</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={24} className="contact-icon" />
          <div>
            <h4>Email Us</h4>
            <a href="mailto:nusdhausd2001@gmail.com" className="contact-link">nusdhausd2001@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          <FaPhone size={24} className="contact-icon" />
          <div>
            <h4>Call Us</h4>
            <p className="contact-text">+94 114561231</p>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt size={24} className="contact-icon" />
          <div>
            <h4>Our Location</h4>
            <p className="contact-text">123 Library St., Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>

      {/* Send Email Button */}
      <div className="email-button-container text-center">
        <button onClick={handleButtonClick} className="btn btn-secondary">
          <FaEnvelope /> Send a Mail to Us
        </button>
      </div>

      {/* Email Form Section */}
      {showForm && (
        <div className="email-form-container">
          <h3 className="text-center">Send Us a Message</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="from_name" placeholder="Your Name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="from_email" placeholder="Your Email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" className="form-control" rows={5} required></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
          {statusMessage && <p className="status-message text-center">{statusMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
