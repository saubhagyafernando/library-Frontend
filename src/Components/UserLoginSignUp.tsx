import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

const UserLoginSignUp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfEnrollment, setYearOfEnrollment] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    login(false); 
    navigate('/search-book');// Log in as user
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'User Login' : 'User Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course</label>
                <input
                  type="text"
                  id="course"
                  className="form-control"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="yearOfEnrollment">Year of Enrollment</label>
                <input
                  type="number"
                  id="yearOfEnrollment"
                  className="form-control"
                  value={yearOfEnrollment}
                  onChange={(e) => setYearOfEnrollment(e.target.value)}
                  required
                />
              </div>
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
            </>
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

export default UserLoginSignUp;