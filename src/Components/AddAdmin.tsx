import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addAdmin, getAdminById, updateAdmin } from '../service/AdminService'; // Adjust the import based on your project structure

const AddAdmin: React.FC = () => {
    const [adminId, setAdminID] = useState('');
  const [adminName, setName] = useState('');
  const [adminEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() =>{
    if(id){
        const fetchAdmin = async () =>{
            const admin = await getAdminById(id);
            setAdminID(admin.adminID);
            setName(admin.adminName);
            setEmail(admin.adminEmail);
            setPassword(admin.password);
        };
        fetchAdmin();
    }
  },[id]);

  const handleChangeAdminId = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setAdminID(event.target.value);
  }

  const handleChangeName = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
  }

  const handleChangeEmail = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value);
  }

  const handleChangePassWord = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (!adminId || !adminName || !adminEmail || !password || !confirmPassword) {
      setErrorMessage('All fields are required!');
      return;
    }

    const admin = {
        adminId,
        adminName,
        adminEmail,
      password
    };

    try {
        if(id){
            await updateAdmin(id,admin);
        } else {
            await addAdmin(admin);
        }
      navigate('/admin-list'); // Redirect to admin dashboard
    } catch (error) {
      console.error('Failed to add admin:', error);
      setErrorMessage('An error occurred while saving the admin.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">{id ? 'Update Admin':'Admin Sign Up'}</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
      <div className="form-group mb-3">
        <label htmlFor="adminId">ID</label>
        <input
            type="text"
            id="adminId"
            className="form-control"
            value={adminId}
            onChange={handleChangeAdminId}
            required
            disabled={!!id} />
        </div>
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
            onChange={handleChangePassWord}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={handleChangePassWord}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update Admin':'Sign Up'}</button>
      </form>
    </div>
  );
};

export default AddAdmin;