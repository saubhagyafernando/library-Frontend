import axios from 'axios';
const API_URL = 'http://localhost:8081/api/admin'; // Replace with your backend API URL

export const getAdmin = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addAdmin = async (admin: {adminId:string; adminName: string; adminEmail: string;password: string}) => {
    const response = await axios.post(API_URL, admin);
    return response.data;
};

export const getAdminById = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateAdmin = async (id: string, admin: {adminId:string; adminName: string; adminEmail: string;password: string}) => {
        const response = await axios.put(`${API_URL}/${id}`, admin);
        return response.data;
};

export const deleteAdmin = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
