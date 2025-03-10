import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAdmin } from '../service/AdminService'; // Adjust the import based on your project structure

const AddAdmin: React.FC = () => {
  const [adminName, setName] = useState('');
  const [adminEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
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
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (!adminName || !adminEmail || !password || !confirmPassword) {
      setErrorMessage('All fields are required!');
      return;
    }
    if (!validateEmail(adminEmail)) {
      setErrorMessage('Please enter a valid Gmail address.');
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    const admin = {
      adminName,
      adminEmail,
      password
    };

    try {
      await addAdmin(admin);
      navigate('/admin-list'); // Redirect to admin list
    } catch (error) {
      console.error('Failed to add admin:', error);
      setErrorMessage('An error occurred while saving the admin.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">Admin Sign Up</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
          <label htmlFor="adminName">Name:</label>
          <input
            type="text"
            id="adminName"
            className="form-control"
            value={adminName}
            onChange={handleChangeName}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="adminEmail">Email:</label>
          <input
            type="email"
            id="adminEmail"
            className="form-control"
            value={adminEmail}
            onChange={handleChangeEmail}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
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

export default AddAdmin;