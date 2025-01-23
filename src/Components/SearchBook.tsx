import React, { useState, useEffect } from 'react';
import { FaBook, FaScroll, FaChalkboardTeacher, FaBookOpen, FaRedo } from 'react-icons/fa';
import './SearchBook.css';

interface Book {
  bookTitle: string;
  isbn: string;
  publicationDate: string;
  subject: string;
  status: number;
}

const SearchBook: React.FC = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/books'); // Update with your API endpoint
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); // Initially show all books
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = () => {
    const results = books.filter((book) =>
      book.bookTitle.toLowerCase().includes(query.toLowerCase()) &&
      (selectedCategory === 'all' || book.subject.toLowerCase() === selectedCategory.toLowerCase())
    );
    setFilteredBooks(results);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const results = books.filter((book) =>
      category === 'all' || book.subject.toLowerCase() === category.toLowerCase()
    );
    setFilteredBooks(results);
  };

  const handleRefresh = () => {
    setQuery('');
    setSelectedCategory('all');
    setFilteredBooks(books); // Reset to all books
  };

  return (
    <div className="search-book-container">
      <h2 className="text-center my-4">Search Book</h2>

      <div className="search-bar mb-4">
        <input
          type="text"
          placeholder="Search by book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="category-buttons mb-4">
        <div className="category-box" onClick={() => handleCategorySelect('novels')}>
          <FaBook /> Novels
        </div>
        <div className="category-box" onClick={() => handleCategorySelect('short stories')}>
          <FaScroll /> Short Stories
        </div>
        <div className="category-box" onClick={() => handleCategorySelect('educational books')}>
          <FaChalkboardTeacher /> Educational Books
        </div>
        <div className="category-box" onClick={() => handleCategorySelect('all')}>
          <FaBookOpen /> All
        </div>
      </div>

      <div className="button-row mb-4">
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
        <button onClick={handleRefresh} className="btn btn-secondary">
          <FaRedo /> Refresh
        </button>
      </div>

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
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.bookTitle}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>{book.subject}</td>
                <td>{book.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">No books found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBook;
