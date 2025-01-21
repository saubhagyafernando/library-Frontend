import React, { useState, useEffect } from 'react';
import {getBook} from '../service/BookService';

interface Book {
  bookTittle: string;
  isbn: string;
  publicationDate: string;
  subject: string;
  status: number;
}

const SearchBook:React.FC = () => {
  const [query, setQuery] = useState('');
  const [books, setBook] = useState<Book[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try{
      const books = await getBook();
      setBook(books);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = () => {
    // Mock search results
    const results = books.filter((book) => book.bookTittle.includes(query));
  };

  return (
    <div>
      <h2>Search Book</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      <h3 className="text-primary">Book List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Publication Date</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.bookTittle}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
              <td>{book.subject}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBook;
