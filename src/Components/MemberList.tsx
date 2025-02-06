import React, { useState, useEffect } from 'react';
import { getUser } from '../service/MemberService';

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
    const [user,setUser] = useState<User[]>([]);
    useEffect(()=>{
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
    return(
        <div>
            <h3 className="text-primary">Member List</h3>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default MemberList;