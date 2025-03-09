import React, { useState, useEffect } from 'react';
import { FaBook, FaScroll, FaChalkboardTeacher, FaBookOpen, FaRedo } from 'react-icons/fa';
import './SearchBook.css';

interface Book {
  bookTittle: string;
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
  const [selectedSubject, setSelectedSubject] = useState<string>(''); // Track subject for educational books
  const [showSubjectDropdown, setShowSubjectDropdown] = useState<boolean>(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/book');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: Book[] = await response.json();
      setBooks(data);
      setFilteredBooks(data); // Initially show all books
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubject(''); // Reset subject when changing category
    setShowSubjectDropdown(category === 'educational books'); // Show subject dropdown only if "Educational Books" is selected
    const results = books.filter(
      (book) => category === 'all' || book.subject.toLowerCase() === category.toLowerCase()
    );
    setFilteredBooks(results);
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    const results = books.filter(
      (book) => book.subject.toLowerCase() === subject.toLowerCase()
    );
    setFilteredBooks(results);
  };

  const handleSearch = () => {
    const results = books.filter(
      (book) =>
        book.bookTittle.toLowerCase().includes(query.toLowerCase()) &&
        (selectedCategory === 'all' || book.subject.toLowerCase() === selectedCategory.toLowerCase()) &&
        (selectedCategory !== 'educational books' || book.subject.toLowerCase() === selectedSubject.toLowerCase())
    );
    setFilteredBooks(results);
  };

  const handleRefresh = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedSubject('');
    setShowSubjectDropdown(false); // Hide dropdown when refreshing
    setFilteredBooks(books); // Reset to all books
  };

  return (
    <div >
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

      {/* Dropdown for Educational Books subjects */}
      {showSubjectDropdown && (
        <div className="subject-dropdown-container mb-4">
          <select
            className="form-control"
            value={selectedSubject}
            onChange={(e) => handleSubjectSelect(e.target.value)}
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
      )}

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
                <td>{book.bookTittle}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>{book.subject}</td>
                <td>{book.status > 0 ? 'Available' : 'Unavailable'}</td>
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
