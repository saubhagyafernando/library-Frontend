// src/Login.tsx
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login:

 React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    // Simulated login validation
    if (username === 'admin' && password === 'admin') {
      setError('');
      alert('Login Successful!');
      // Redirect to home page or set user as logged in
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleSignUp = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    // Simulated sign-up validation
    alert('Sign-Up Successful!');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;