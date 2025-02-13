import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg'; // Import the logo.jpg

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Library Logo" className="logo" />
        <div className="logo-text">Library</div>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/user-login-signup">User Signup/Login</Link>
        <Link to="/admin-login-signup">Admin Signup/Login</Link>
      </div>
    </div>
  );
};

export default Navbar;

