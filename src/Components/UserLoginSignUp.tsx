import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/MemberService';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

const UserLoginSignUp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userFirstName, setFirstName] = useState('');
  const [UserLastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [YearOfEnrollment, setYearOfEnrollment] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChangeEmail = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value);
  }

  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }; 

  const handleChangePassWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleChangeDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  }

  const handleCHangeCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(event.target.value);
  }

  const handleChangeYearOfEnrollment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearOfEnrollment(event.target.value);
  }
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLogin && userPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!email || !userFirstName || !UserLastName || !course || !department || !YearOfEnrollment || !userPassword){
      setError('All fields are required!');
      return;
    }
    try{
    await addUser({
      userFirstName,
      UserLastName,
      email,
      course,
      department,
      userPassword,
      YearOfEnrollment: Number(YearOfEnrollment),
      id: ''
    })
    login(false); 
    navigate('/search-book');// Log in as user
    } catch (error) {
      console.error('Failed to add user:', error);
      setError('An error occurred while saving the user.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'User Login' : 'User Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="UserLastName">Last Name</label>
                <input
                  type="text"
                  id="UserLastName"
                  className="form-control"
                  value={UserLastName}
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
                  onChange={handleCHangeCourse}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="YearOfEnrollment">Year of Enrollment</label>
                <input
                  type="number"
                  id="YearOfEnrollment"
                  className="form-control"
                  value={YearOfEnrollment}
                  onChange={handleChangeYearOfEnrollment}
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
                  onChange={handleChangePassWord}
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