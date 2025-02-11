import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdminById, updateAdmin } from '../service/AdminService'; // Adjust the import based on your project structure
import './LoginSignUp.css';

const AddAdmin: React.FC = () => {
  const [adminId, setId] = useState('');
  const [adminName, setName] = useState('');
  const [adminEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const fetchAdmin = async () => {
        try {
          const admin = await getAdminById(id);
          setId(admin.adminId);
          setName(admin.adminName);
          setEmail(admin.adminEmail);
          setPassword(admin.password); // Clear password field for security reasons
        } catch (error) {
          console.error('Failed to fetch admin:', error);
          setErrorMessage('An error occurred while fetching the admin.');
        }
      };
      fetchAdmin();
    }
  }, [id]);

  const handleChangeAdminId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!adminId || !adminName || !adminEmail || !password) {
      setErrorMessage('All fields are required!');
      return;
    }

    if (!id) {
      setErrorMessage('Invalid admin ID.');
      return;
    }

    const admin = {
      adminId,
      adminName,
      adminEmail,
      password
    };

    try {
      await updateAdmin(id, admin);
      navigate('/admin-dashboard'); // Redirect to admin dashboard
    } catch (error) {
      console.error('Failed to update admin:', error);
      setErrorMessage('An error occurred while updating the admin.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">Update Admin</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
          <label htmlFor="adminId">Admin ID:</label>
          <input
            type="text"
            id="adminId"
            className="form-control"
            value={adminId}
            onChange={handleChangeAdminId}
            required
          />
          </div>
        <div className="form-group mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={adminName}
            onChange={handleChangeName}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
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
        <button type="submit" className="btn btn-primary">Update Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;