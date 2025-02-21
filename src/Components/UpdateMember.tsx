import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../service/MemberService'; // Adjust the import based on your project structure

const UpdateMember: React.FC = () => {
  const [userID, setUserID] = useState('');
  const [userFirstName, setFirstName] = useState('');
  const [userLastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [yearOfEnrollment, setYearOfEnrollment] = useState('');
  const [userPassword, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { userID: userId } = useParams<{ userID: string }>();

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const user = await getUserById(userId);
          setUserID(user.userID);
          setFirstName(user.userFirstName);
          setLastName(user.userLastName);
          setEmail(user.email);
          setDepartment(user.department);
          setCourse(user.course);
          setYearOfEnrollment(user.yearOfEnrollment.toString());
          setPassword(user.userPassword); // Clear password field for security reasons
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setErrorMessage('An error occurred while fetching the user.');
        }
      };
      fetchUser();
    }
  }, [userId]);

  const handleChangeUserID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value);
  };

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userID || !userFirstName || !userLastName || !email || !department || !course || !yearOfEnrollment || !userPassword) {
      setErrorMessage('All fields are required!');
      return;
    }
    if (!/^\d{4}$/.test(yearOfEnrollment)) {
      setErrorMessage('Year of Enrollment must be a 4-digit numeric value');
      return;
    }

    const user = {
      userID,
      userFirstName,
      userLastName,
      email,
      department,
      course,
      yearOfEnrollment: Number(yearOfEnrollment),
      userPassword
    };

    try {
      await updateUser(userID, user);
      navigate('/member-list'); // Redirect to user dashboard
    } catch (error) {
      console.error('Failed to update user:', error);
      setErrorMessage('An error occurred while updating the user.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">Update User</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
          <label htmlFor="userID">ID</label>
          <input
            type="text"
            id="userID"
            className="form-control"
            value={userID}
            onChange={handleChangeUserID}
            disabled
          />
        </div>
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
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
};

export default UpdateMember;