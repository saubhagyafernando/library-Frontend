import axios from 'axios';
const API_URL = 'http://localhost:8081/api/user'; // Replace with your backend API URL

export const getUser = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addUser = async (user: {id:string; userFirstName: string; UserLastName: string;email: string;department: string;course:string;YearOfEnrollment: number;userPassword:string}) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};

export const getUserById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateUser = async (id: number, user: {id:string; userFirstName: string; UserLastName: string;email: string;department: string;course:string;YearOfEnrollment: number;userPassword:string}) => {
        const response = await axios.put(`${API_URL}/${id}`, user);
        return response.data;
};

export const deleteUser = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
