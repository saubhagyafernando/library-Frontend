import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAdmin, deleteAdmin } from '../service/AdminService'; // Adjust the import based on your project structure

interface Admin {
  adminId: string;
  adminName: string;
  adminEmail: string;
  password: string;
}

const AdminList: React.FC = () => {
  const [admin, setAdmin] = useState<Admin[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const admin = await getAdmin();
        setAdmin(admin);
      } catch (error) {
        console.error('Failed to fetch admin:', error);
      }
    };
    fetchAdmin();
  }, []);

  const handleSignUpAdmin = () => {
    navigate('/add-admin');
  };

  const handleUpdate = (adminId: string) => {
    navigate(`/update-admin/${adminId}`);
  };

  const handleDelete = async (adminId: string) => {
    try {
      await deleteAdmin(adminId);
      setAdmin((prev) => prev.filter((admin) => admin.adminId !== adminId));
    } catch (error) {
      console.error('Failed to delete admin:', error);
    }
  };

  return (
    <div>
      <h3 className="text-primary">Admin List</h3>
      <button className="btn btn-primary mb-3" onClick={handleSignUpAdmin}>
        SignUp Admin
      </button>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Admin Name</th>
            <th>Admin Email</th>
            <th>Admin Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admin.map((admin) => (
            <tr key={admin.adminId}>
              <td>{admin.adminName}</td>
              <td>{admin.adminEmail}</td>
              <td>{admin.password}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => handleUpdate(admin.adminId)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDelete(admin.adminId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;