import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../service/BookService'; // Adjust the import based on your project structure

const AddBook: React.FC = () => {
  const [bookTittle, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChangeBookTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeIsbn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(e.target.value);
  };

  const handleChangePublicationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublicationDate(e.target.value);
  };

  const handleChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    if (!/^\d+$/.test(status)) {
      setErrorMessage('Status must be a numeric value!');
      return;
    }
    if (!/^\d+$/.test(isbn)) {
      setErrorMessage('ISBN must be a numeric value!');
      return;
    }

    const book = {
      bookTittle,
      isbn: parseInt(isbn, 10), // Convert isbn to number
      publicationDate: new Date(publicationDate), // Convert publicationDate to Date
      subject,
      status: parseInt(status, 10) // Convert status to number
    };

    try {
      await addBook(book);
      navigate('/update-list');
    } catch (error) {
      console.error('Failed to save book:', error);
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
          <select
            id="subject"
            className="form-control"
            value={subject}
            onChange={handleChangeSubject}
            required
          >
            <option value="">Select Subject</option>
            <option value="Science">Science</option>
            <option value="Maths">Maths</option>
            <option value="Business">Business</option>
            <option value="Art">Art</option>
            <option value="Geometry">Geometry</option>
            <option value="Law">Law</option>
            <option value="Sinhala">Sinhala</option>
            <option value="Religion">Religion</option>
            <option value="computer science">computer science</option>
            <option value="langauge">langauge</option>
            <option value="manegment">manegment</option>
            <option value="other">other</option>

          </select>
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
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
