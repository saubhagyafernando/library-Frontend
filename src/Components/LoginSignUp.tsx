import { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState<'userLogin' | 'adminLogin' | 'signup'>('userLogin');

  const renderForm = () => {
    switch (activeTab) {
      case 'userLogin':
        return (
          <form>
            <h2>User Login</h2>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
            <button type="submit">Login</button>
          </form>
        );
      case 'adminLogin':
        return (
          <form>
            <h2>Admin Login</h2>
            <label>Email:</label>
            <input type="email" placeholder="Enter admin email" required />
            <label>Password:</label>
            <input type="password" placeholder="Enter admin password" required />
            <button type="submit">Login</button>
          </form>
        );
      case 'signup':
        return (
          <form>
            <h2>Sign Up</h2>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password:</label>
            <input type="password" placeholder="Create a password" required />
            <button type="submit">Sign Up</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="login-signup-container">
      <div className="tabs">
        <button
          className={activeTab === 'userLogin' ? 'active' : ''}
          onClick={() => setActiveTab('userLogin')}
        >
          User Login
        </button>
        <button
          className={activeTab === 'adminLogin' ? 'active' : ''}
          onClick={() => setActiveTab('adminLogin')}
        >
          Admin Login
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>
      {renderForm()}
    </div>
  );
};

export default LoginSignUp;
