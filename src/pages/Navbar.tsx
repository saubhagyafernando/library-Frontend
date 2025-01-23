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
        <Link to="/search-book">Search Book</Link>
        <Link to="/user-login-signup">User Signup/Login</Link>
        <Link to="/admin-login-signup">Admin Signup/Login</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/update-book">Update Book</Link>
        <Link to="/add-member">Add Member</Link>

      </div>
    </div>
  );
};

export default Navbar;
