// src/pages/AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'; // optional for styles

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
    </div>
  );
};

export default AboutUs;
