import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-center text-white mt-auto py-3" style={{ borderTop: '1px solid black' }}>
      <div className="contact-details mt-3">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i> +94 114561231
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i> onlinelibrary@library.com
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i> 123 Library St., Colombo, Sri Lanka
        </div>
      </div>
      <div>© 2024 Student Management System</div>
    </footer>
  );
};

export default Footer;