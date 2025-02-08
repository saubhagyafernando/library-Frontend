import React, { useState, useEffect } from 'react';
import {getBook, deleteBook} from '../service/BookService';
import { useNavigate } from 'react-router-dom';
import './UpdateList.css';

interface Book {
  bookID: string;
  bookTittle: string;
  isbn: number;
  publicationDate: Date;
  subject: string;
  status: number;
}

const UpdateList: React.FC = () => {
  const [] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  React.useEffect(() =>{
    const fetchBooks = async () =>{
      try{
        const book = await getBook();
        setBooks(book);
      }catch (error){
        console.error('failed to fetch books:',error);
      }
    };
    fetchBooks();
  },[]);

  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate('/add-book');
  };

  const handleAdminList = () =>{
    navigate('/admin-list');
  };

  const handleMemberList = () =>{
    navigate('/member-list');
  };

  const handleUpdate = (id: string) => {
    console.log(`Updating book with id: ${id}`);
    navigate(`/update-book/${id}`);
  };

  const handleDelete = async(id:string)=>{
    try{
      console.log(`Deleting book with id: ${id}`);
      await deleteBook(id);
      setBooks((prev) => prev.filter((book) => book.bookID !== id));
    }catch (error){
      console.error('Failed to delete book:',error);
    }
  };

  return (
    <div >
      <h3 className="text-primary">Book List</h3>
      <button className="btn btn-primary mb-3" onClick={handleAddBook}>
        Add Book
      </button>
      <button className="btn btn-primary mb-3" onClick={handleAdminList}>
        Admin List
      </button>
      <button className="btn btn-primary mb-3" onClick={handleMemberList}>
        Member List
      </button>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Publication Date</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
              <tr key={book.bookID}>
                <td>{book.bookTittle}</td>
                <td>{book.isbn}</td>
                <td>{new Date(book.publicationDate).toLocaleDateString()}</td>
                <td>{book.subject}</td>
                <td>{book.status>0 ? 'Available' : 'Unavailable'}</td>
                <td>
                <button className="btn btn-primary me-2" onClick={() => handleUpdate(book.bookID)}>
                Update
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(book.bookID)}>
                Delete
                </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateList;