import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  // State to control form visibility
  const [showForm, setShowForm] = useState(false);

  // Toggle form visibility
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contact-us-container">
      <h1 className="text-center">Contact Us</h1>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={24} className="contact-icon" />
          <div>
            <h4>Email Us</h4>
            <a href="mailto:info@example.com" className="contact-link">onlinelibrary@gmail.com</a>
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
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" className="form-control" rows={5}></textarea>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
