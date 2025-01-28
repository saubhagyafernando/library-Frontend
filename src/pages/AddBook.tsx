import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook, addBook } from '../service/BookService';
import './AddBook.css'; // Adjust the import based on your project structure

const AddBook: React.FC = () => {
  const [bookID, setBookId] = useState('');
  const [bookTittle, setTitle] = useState('');
  const [isbn, setIsbn] = useState<number | string>('');
  const [publicationDate, setPublicationDate] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState<number | string>('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const fetchBooks = async () => {
        try {
          const book = await getBookById(Number(id));
          setBookId(String(book.bookID));
          setTitle(book.bookTittle);
          setIsbn(Number(book.isbn));
          setPublicationDate(book.publicationDate);
          setSubject(book.subject);
          setStatus(Number(book.status));
        } catch (error) {
          console.error('Failed to fetch book:', error);
          setErrorMessage('An error occurred while fetching the book.');
        }
      };
      fetchBooks();
    }
  }, [id]);

  const handleChangeBookId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookId(e.target.value);
  };

  const handleChangedBookTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeIsbn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(e.target.value);
  };

  const handleChangePublicationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublicationDate(e.target.value);
  };

  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!bookTittle || !isbn || !publicationDate || !subject || !status) {
      setErrorMessage('All fields are required!');
      return;
    }
    if (!/^\d+$/.test(status.toString())) {
      setErrorMessage('Number Of Book must be a numeric value!');
      return;
    }
    if (!/^\d+$/.test(isbn.toString())) {
      setErrorMessage('Book of isbn must be a numeric value!');
      return;
    }

    const book = {
      bookID: id ? id : '', // Ensure bookID is present
      bookTittle: bookTittle,
      isbn: new Int32Array([parseInt(isbn.toString(), 10)]), // Convert isbn to Int32List
      publicationDate: new Date(publicationDate), // Convert publicationDate to Date
      subject: subject,
      status: new Int32Array([parseInt(status.toString(), 10)]) // Convert status to Int32List
    };

    try {
      if (id) {
        await updateBook(Number(id), book);
      } else {
        await addBook(book);
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to add book:', error);
      setErrorMessage('An error occurred while saving the book.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">Add Book</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
          <label htmlFor="bookTittle">Title:</label>
          <input
            type="text"
            id="bookTittle"
            className="form-control"
            value={bookTittle}
            onChange={handleChangedBookTitle}
            required
            disabled={!!id}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            className="form-control"
            value={isbn}
            onChange={handleChangeIsbn}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="publicationDate">Publication Date:</label>
          <input
            type="date"
            id="publicationDate"
            className="form-control"
            value={publicationDate}
            onChange={handleChangePublicationDate}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            className="form-control"
            value={subject}
            onChange={handleChangeSubject}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="status">Status:</label>
          <input
            type="number"
            id="status"
            className="form-control"
            value={status}
            onChange={handleChangeStatus}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update Book' : 'Add Book'}</button>
      </form>
    </div>
  );
};

export default AddBook;