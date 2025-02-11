import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

const AdminLoginSignUp: React.FC = () => {
  const { login } = useAuth();
  const [adminEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (!adminEmail || !password) {
      setError('All fields are required!');
      return;
    }
    
      login(true); // Log in as admin
      navigate('/update-list');

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Email</label>
        <input type="email" value={adminEmail} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLoginSignUp;