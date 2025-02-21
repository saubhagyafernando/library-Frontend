import React from 'react';
import { getUser, deleteUser } from '../service/MemberService';
import { useNavigate } from 'react-router-dom';

interface User{
    userID: string;
    userFirstName: string;
    userLastName: string;
    email: string;
    department: string;
    course: string;
    yearOfEnrollment: number;
    userPassword: string;
}

const MemberList: React.FC = () =>{
    const [user,setUser] = React.useState<User[]>([]);
    React.useEffect(()=>{
        const fetchUser = async () =>{
            try{
                const user = await getUser();
                setUser(user);
            }catch (error) {
                console.error('Failed to fetch users:',error);
            }
        };
        fetchUser();
    },[]);

    const navigate = useNavigate();

    const handleAddMember = () =>{
        navigate('/add-member');
    };

    const handleUpdate = (userID: string) =>{
        navigate(`/update-member/${userID}`);
    }

    const handleDelete = async (userID:string) =>{
        try{
            await deleteUser(userID);
            setUser((prev) => prev.filter((user) => user.userID !== userID));
        }catch (error){
            console.error('Failed to delete users:',error);
        }
    }

    return(
        <div>
            <h3 className="text-primary">Member List</h3>
            <button className="btn btn-primary mb-3" onClick={handleAddMember}>
                Add Member
            </button>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Course</th>
                        <th>Year Of Entrollment</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) =>(
                        <tr key={user.userID}>
                            <td>{user.userFirstName}</td>
                            <td>{user.userLastName}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td>{user.course}</td>
                            <td>{user.yearOfEnrollment}</td>
                            <td>{user.userPassword}</td>
                            <td>
                                <button className="btn btn-primary me-2" onClick={() => handleUpdate(user.userID)}>Update</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(user.userID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default MemberList;