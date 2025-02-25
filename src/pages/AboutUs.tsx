import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <h2>Welcome to our library. Explore the sections below to learn more about our library.</h2>
      
      <div className="sections">
        <div className="section-item">
          <Link to="/library-notice">
            <i className="fas fa-bell"></i>
            <p>Library Notice</p>
          </Link>
        </div>
        
        <div className="section-item">
          <Link to="/vision-and-mission">
            <i className="fas fa-eye"></i>
            <p>Vision and Mission</p>
          </Link>
        </div>

        <div className="section-item">
          <Link to="/library-hours">
            <i className="fas fa-clock"></i>
            <p>Library Opening Hours</p>
          </Link>
        </div>

        <div className="section-item">
          <Link to="/library-staff">
            <i className="fas fa-users"></i>
            <p>Library Staff</p>
          </Link>
        </div>
      </div>

      <div className="additional-info">
        <h2>History of Our Library</h2>
        <p>Our library was established in 1920 with the mission to provide access to knowledge and resources to the community. Over the years, we have grown to become a central hub for learning and cultural activities.</p>

        <h2>Services Offered</h2>
        <ul>
          <li>Book lending and returns</li>
          <li>Free Wi-Fi access</li>
          <li>Study rooms and meeting spaces</li>
          <li>Workshops and events</li>
          <li>Online resources and databases</li>
        </ul>

        <h2>Contact Information</h2>
        <p>If you have any questions or need assistance, please feel free to contact us:</p>
        <p><i className="fas fa-phone-alt"></i>+94 114561231</p>
        <p><i className="fas fa-envelope"></i> onlinelibrary@library.com</p>
        <p><i className="fas fa-map-marker-alt"></i> 123 Library St., Colombo, Sri Lanka</p>
      </div>
    </div>
  );
};

export default AboutUs;