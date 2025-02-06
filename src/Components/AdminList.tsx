import React, { useState, useEffect } from 'react';
import { getAdmin } from '../service/AdminService';

interface Admin {
    adminID: string;
    adminName: string;
    adminEmail: string;
    password: string;
}

const AdminList: React.FC =() =>{
    const[admin,setAdmin] = useState<Admin[]>([]);
    useEffect(() =>{
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

    return(
        <div>
            <h3 className="text-primary">Admin List</h3>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Admin Name</th>
                        <th>Admin Email</th>
                        <th>Admin Password</th>
                    </tr>
                </thead>
                <tbody>
                    {admin.map((admin) =>(
                        <tr key={admin.adminID}>
                            <td>{admin.adminName}</td>
                            <td>{admin.adminEmail}</td>
                            <td>{admin.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default AdminList;