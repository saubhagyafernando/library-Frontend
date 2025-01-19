
// Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">Library</div>
      <div className="menu">
      <a href="/">Home</a>
        <a href="/user-login-signup">User Signup/Login</a>
        <a href="/admin-login-signup">Admin Signup/Login</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/search-book">Search Book</a>
        <a href="/add-book">Add Book</a>
        <a href="/update-book">Update Book</a>
      </div>
    </div>
  );
};

export default Navbar;



