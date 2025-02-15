import axios from 'axios';
const API_URL = 'http://localhost:8081/api/user'; // Replace with your backend API URL

export const getUser = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addUser = async (user: { userFirstName: string; userLastName: string;email: string;department: string;course:string;yearOfEnrollment: number;userPassword:string}) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};

export const getUserById = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateUser = async (id: string, user: {userID: string; userFirstName: string; userLastName: string;email: string;department: string;course:string;yearOfEnrollment: number;userPassword:string}) => {
        const response = await axios.put(`${API_URL}/${id}`, user);
        return response.data;
};

export const deleteUser = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const getUserByEmail = async (email: string) => {
    const response = await axios.get(`${API_URL}/email/${email}`);
    return response.data;
};