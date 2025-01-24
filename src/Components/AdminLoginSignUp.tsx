import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

const AdminLoginSignUp: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    login(true); // Log in as admin
    navigate('/add-book'); // Redirect to admin dashboard
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLoginSignUp;