// src/UserLoginSignUp.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UserLoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between Login and Sign-Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Handle the form submission for Login/Sign Up
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      try {
        const response = await axios.get('http://localhost:8081/api/user/login', {
          params: { email, userPassword: password },
        });
        alert('Login successful');
      } catch (error) {
        setErrorMessage('Invalid email or password');
      }
    } else {
      // Sign-Up logic
      if (!email || !firstName || !lastName || !password) {
        setErrorMessage('Please fill all fields');
        return;
      }

      try {
        await axios.post('http://localhost:8081/api/user/save', {
          email,
          userFirstName: firstName,
          userLastName: lastName,
          userPassword: password,
        });
        alert('Sign Up successful');
        setIsLogin(true); // Switch to Login after successful sign-up
      } catch (error) {
        setErrorMessage('Error while signing up');
      }
    }
  };

  return (
    <div className="container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
  
        
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default UserLoginSignUp;
