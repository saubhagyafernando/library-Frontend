import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/MemberService'; // Adjust the import based on your project structure
import './LoginSignUp.css';

const AddMember: React.FC = () => {
  const [userFirstName, setFirstName] = useState('');
  const [userLastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfEnrollment, setYearOfEnrollment] = useState('');
  const [userPassword, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (!userFirstName || !userLastName || !email || !department || !course || !yearOfEnrollment || !userPassword) {
      setErrorMessage('All fields are required!');
      return;
    }

    const user = {
      userFirstName,
      userLastName,
      email,
      department,
      course,
      yearOfEnrollment: Number(yearOfEnrollment),
      userPassword
    };

    try {
      await addUser(user);
      navigate('/user-dashboard'); // Redirect to user dashboard
    } catch (error) {
      console.error('Failed to add user:', error);
      setErrorMessage('An error occurred while saving the user.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">User Sign Up</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
          <label htmlFor="userFirstName">First Name:</label>
          <input
            type="text"
            id="userFirstName"
            className="form-control"
            value={userFirstName}
            onChange={handleChangeFirstName}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="userLastName">Last Name:</label>
          <input
            type="text"
            id="userLastName"
            className="form-control"
            value={userLastName}
            onChange={handleChangeLastName}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            className="form-control"
            value={department}
            onChange={handleChangeDepartment}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            className="form-control"
            value={course}
            onChange={handleChangeCourse}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="yearOfEnrollment">Year of Enrollment:</label>
          <input
            type="number"
            id="yearOfEnrollment"
            className="form-control"
            value={yearOfEnrollment}
            onChange={handleChangeYearOfEnrollment}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            id="userPassword"
            className="form-control"
            value={userPassword}
            onChange={handleChangePassword}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default AddMember;