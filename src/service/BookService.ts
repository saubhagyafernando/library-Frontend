import axios from 'axios';
const API_URL = 'http://localhost:8081/api/book'; // Replace with your backend API URL

export const getBook = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addBook = async (book: {id:string; bookTittle: string; isbn: Int32List;publicationDate: Date;subject: string;status:Int32List}) => {
    const response = await axios.post(API_URL, book);
    return response.data;
};

export const getBookById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateBook = async (id: number, book: {id:string; bookTittle: string; isbn: Int32List;publicationDate: Date;subject: string;status:Int32List}) => {
        const response = await axios.put(`${API_URL}/${id}`, book);
        return response.data;
};

export const deleteBook = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
