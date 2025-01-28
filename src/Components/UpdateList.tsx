import React, { useState } from 'react';
import {getBook, deleteBook} from '../service/BookService';
import { useNavigate } from 'react-router-dom';
import './UpdateList.css';

interface Book {
  id: string;
  bookID: string;
  bookTittle: string;
  isbn: number;
  publicationDate: Date;
  subject: string;
  status: number;
}

const UpdateList: React.FC = () => {
  const [] = useState('');
  const [books, setBooks] = React.useState<Book[]>([]);
  const [bookTittle, setTitle] = useState('');
  const [availability, setAvailability] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Book "${bookTittle}" updated with availability: ${availability}`);
  };

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

  const handleUpdate = (id: string) => {
    navigate(`/update-book/${id}`);
  }

  const handleDelete = async(id:string)=>{
    try{
      await deleteBook(Number(id));
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
                <button className="btn btn-primary me-2" onClick={() => handleUpdate(book.id)}>
                Update
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>
                Delete
                </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={bookTittle} onChange={(e) => setTitle(e.target.value)} required />
        <label>Available:</label>
        <input type="checkbox" checked={availability} onChange={(e) => setAvailability(e.target.checked)} />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateList;