import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../service/BookService'; // Adjust the import based on your project structure

const UpdateBook: React.FC = () => {
  const [bookID, setBookId] = useState('');
  const [bookTittle, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { bookID: paramBookID } = useParams<{ bookID: string }>();

  useEffect(() => {
    if (paramBookID) {
      const fetchBook = async () => {
        try {
          const book = await getBookById(paramBookID);
          setBookId(String(book.bookID));
          setTitle(book.bookTittle);
          setIsbn(book.isbn.toString()); // Convert isbn to string
          setPublicationDate(book.publicationDate);
          setSubject(book.subject);
          setStatus(book.status.toString()); // Convert status to string
        } catch (error) {
          console.error('Failed to fetch book:', error);
          setErrorMessage('An error occurred while fetching the book.');
        }
      };
      fetchBook();
    }
  }, [paramBookID]);

  const handleChangeBookTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    if (!bookID || !bookTittle || !isbn || !publicationDate || !subject || !status) {
      setErrorMessage('All fields are required!');
      return;
    }
    if (!/^\d+$/.test(status)) {
      setErrorMessage('Status must be a numeric value!');
      return;
    }
    if (!/^\d+$/.test(isbn)) {
      setErrorMessage('ISBN must be a numeric value!');
      return;
    }

    const book = {
      bookID,
      bookTittle,
      isbn: parseInt(isbn, 10), // Convert isbn to number
      publicationDate: new Date(publicationDate), // Convert publicationDate to Date
      subject,
      status: parseInt(status, 10) // Convert status to number
    };

    try {
      await updateBook(bookID, book);
      navigate('/update-list');
    } catch (error) {
      console.error('Failed to save book:', error);
      setErrorMessage('An error occurred while saving the book.');
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-primary text-center">Update Book</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="card p-3 shadow">
        <div className="form-group mb-3">
          <label htmlFor="bookID">ID</label>
          <input
            type="text"
            id="bookID"
            className="form-control"
            value={bookID}
            disabled
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bookTittle">Title:</label>
          <input
            type="text"
            id="bookTittle"
            className="form-control"
            value={bookTittle}
            onChange={handleChangeBookTitle}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="number"
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
        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;