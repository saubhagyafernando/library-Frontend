import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';  // Import your AuthContext
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();  // Access the authentication state from context
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    logout();  // Call logout function from context
    navigate('/');
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <div className="navbar">
      <div className="logo">Library</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>

        {/* Render User login/sign up or the 'Search Book' and 'Logout' links based on login status */}
        {!isAuthenticated ? (
          <Link to="/user-login-signup" className="login-button">User SignUp/Login</Link>
        ) : (
          <>
            <Link to="/search-book">Search Book</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}

        {/* Admin login or admin actions */}
        {!isAdmin ? (
          <button onClick={handleAdminLogin} className="login-button">Admin Login</button>
        ) : (
          <>
            <Link to="/add-book">Add Book</Link>
            <Link to="/update-book">Update Book</Link>
            <Link to="/add-member">Add Member</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
