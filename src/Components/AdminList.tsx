import React from 'react';
import { getAdmin,deleteAdmin } from '../service/AdminService';
import { useNavigate } from 'react-router-dom';

interface Admin {
    adminID: string;
    adminName: string;
    adminEmail: string;
    password: string;
}

const AdminList: React.FC =() =>{
    const[admin,setAdmin] = React.useState<Admin[]>([]);
    React.useEffect(() =>{
        const fetchAdmin = async () =>{
            try{
                const admin = await getAdmin();
                setAdmin(admin);
            }catch (error) {
                console.error('Feild to fetch admin:',error);
            }
        };
        fetchAdmin();
    },[]);

    const navigate = useNavigate();

    const handleSignUpAdmin = () =>{
        navigate('/add-admin');
    }

    const handleUpdate = (id: string) =>{
        navigate('/update-admin/${id}');
    }

    const handleDelete = async(id: string) =>{
        try{
            await deleteAdmin(id);
            setAdmin((prev)=>prev.filter((admin) => admin.adminID !== id));
        }catch (error){
            console.error('Failed to delete admin:', error);
        }
    };

    return(
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
                    {admin.map((admin) =>(
                        <tr key={admin.adminID}>
                            <td>{admin.adminName}</td>
                            <td>{admin.adminEmail}</td>
                            <td>{admin.password}</td>
                            <td>
                                <button className="btn btn-primary me-2" onClick={() => handleUpdate(admin.adminID)}>Update</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(admin.adminID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default AdminList;