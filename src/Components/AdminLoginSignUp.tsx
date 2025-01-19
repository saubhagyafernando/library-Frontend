import React, { useState } from 'react';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

const AdminLoginSignUp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [adminName, setAdminName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    login(true); // Log in as admin
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Admin Login' : 'Admin Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="adminName">Admin Name</label>
              <input
                type="text"
                id="adminName"
                className="form-control"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button onClick={toggleForm} className="btn btn-link">
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AdminLoginSignUp;