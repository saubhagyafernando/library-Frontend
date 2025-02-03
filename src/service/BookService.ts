import axios from 'axios';
const API_URL = 'http://localhost:8081/api/book'; // Replace with your backend API URL

export const getBook = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addBook = async (book: {bookID:string; bookTittle: string; isbn: number;publicationDate: Date;subject: string;status:number}) => {
    const response = await axios.post(API_URL, book);
    return response.data;
};

export const getBookById = async (bookID: string) => {
    const response = await axios.get(`${API_URL}/${bookID}`);
    return response.data;
};

export const updateBook = async (bookID: string, book: {bookID:string; bookTittle: string; isbn: number;publicationDate: Date;subject: string;status:number}) => {
        const response = await axios.put(`${API_URL}/${bookID}`, book);
        return response.data;
};

export const deleteBook = async (bookID: string) => {
    const response = await axios.delete(`${API_URL}/${bookID}`);
    return response.data;
};
// Removed the unused put function

