import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdminByAdminEmail } from '../service/AdminService';
import { useAuth } from '../Utils/AuthContext';
import './LoginSignUp.css';

interface Admin {
  adminId: string;
  adminName: string;
  adminEmail: string;
  password: string;
}

const AdminLoginSignUp: React.FC = () => {
  const { login } = useAuth();
  const [adminEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (!adminEmail || !password) {
      setError('All fields are required!');
      return;
    }
    try{
      const admin = await getAdminByAdminEmail(adminEmail);
      if( admin && admin.password == password){
      login(false); // Log in as admin
      navigate('/update-list');
      } else {
        setError('Invalid email or password');
      }
      
    }catch(error){
      console.error('Failed to login:', error);
      setError('An error occurred while logging in.');
    }

  };

  return (
    <div className="container mt-3">
      <div className="form-container">
    <form onSubmit={handleSubmit} className="card p-3 shadow">
      <h2 className="text-primary text-center">Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="adminEmail">Email</label>
        <input 
        type="adminEmail" 
        id="adminEmail"
        className="form-control"
        value={adminEmail} 
        onChange={handleChangeEmail} 
        required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        id="password"
        className="form-control"
        value={password} 
        onChange={handleChangePassword} 
        required />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    </div>
  );
};

export default AdminLoginSignUp;