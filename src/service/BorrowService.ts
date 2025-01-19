import axios from 'axios';
const API_URL = 'http://localhost:8081/api/borrow'; // Replace with your backend API URL

export const getBorrow = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addBorrow = async (borrow: {id:string; borrowDate: Date; returnDate: Date}) => {
    const response = await axios.post(API_URL, borrow);
    return response.data;
};

export const getBorrowById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateBorrow = async (id: number, borrow: {id:string; borrowDate: Date; returnDate: Date}) => {
        const response = await axios.put(`${API_URL}/${id}`, borrow);
        return response.data;
};

export const deleteBorrow = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
