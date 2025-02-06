import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">Library</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/user-login-signup">User Signup/Login</Link>
        <Link to="/admin-login-signup">Admin Signup/Login</Link>
        <Link to="/add-admin">Add Admin</Link>
        <Link to="/add-member">Member</Link>
        <Link to="/admin-list">Admin List</Link>
        <Link to="/member-list">Member List</Link>
      </div>
    </div>
  );
};

export default Navbar;
