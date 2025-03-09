import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, getUserByEmail } from '../service/MemberService';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

interface User {
  userID: string;
  userFirstName: string;
  userLastName: string;
  email: string;
  department: string;
  course: string;
  yearOfEnrollment: number;
  userPassword: string;
}

const UserLoginSignUp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userFirstName, setFirstName] = useState('');
  const [userLastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfEnrollment, setYearOfEnrollment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleChangePassWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  };

  const handleChangeCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(event.target.value);
  };

  const handleChangeYearOfEnrollment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearOfEnrollment(event.target.value);
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    // Validate fields
    if (isLogin) {
      // Login logic validation
      if (!email || !userPassword) {
        setErrorMessage('Email and Password are required!');
        return;
      }
      if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid Gmail address.');
        return;
      }

      try {
        const user = await getUserByEmail(email);
        if (user && user.userPassword === userPassword) {
          login(false); // Log in as user
          navigate('/search-book');
        } else {
          setErrorMessage('Invalid email or password');
        }
      } catch (error) {
        console.error('Failed to login:', error);
        setErrorMessage('An error occurred while logging in.');
      }
    } else {
      // Sign up logic validation
      if (!email || !userFirstName || !userLastName || !course || !department || !yearOfEnrollment || !userPassword) {
        setErrorMessage('All fields are required!');
        return;
      }

      if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid Gmail address.');
        return;
      }

      if (!validatePassword(userPassword)) {
        setErrorMessage('Password must be at least 8 characters long.');
        return;
      }

      if (userPassword !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }

      try {
        await addUser({
          userFirstName,
          userLastName,
          email,
          course,
          department,
          userPassword,
          yearOfEnrollment: Number(yearOfEnrollment)
        });
        login(false);
        navigate('/search-book'); // Log in as user
      } catch (error) {
        console.error('Failed to add user:', error);
        setErrorMessage('An error occurred while saving the user.');
      }
    }
  };

  return (
    <div className="container mt-3">
      <div className="form-container">
        <h2 className="text-primary text-center">{isLogin ? 'User Login' : 'User Sign Up'}</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="card p-3 shadow">
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="userFirstName">First Name</label>
                <input
                  type="text"
                  id="userFirstName"
                  className="form-control"
                  value={userFirstName}
                  onChange={handleChangeFirstName}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userLastName">Last Name</label>
                <input
                  type="text"
                  id="userLastName"
                  className="form-control"
                  value={userLastName}
                  onChange={handleChangeLastName}
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
                  onChange={handleChangeDepartment}
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
                  onChange={handleChangeCourse}
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
                  onChange={handleChangeYearOfEnrollment}
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
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              className="form-control"
              value={userPassword}
              onChange={handleChangePassWord}
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
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="btn btn-primary">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button onClick={toggleForm} className="btn btn-link">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default UserLoginSignUp;
