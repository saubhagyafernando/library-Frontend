import React, { useState, useEffect } from "react";
import { getBook } from "../service/BookService";

interface Book {
  bookTittle: string;
  isbn: string;
  publicationDate: string;
  subject: string;
  status: number;
}

const SearchBook: React.FC = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getBook();
        setBooks(books);
        setFilteredBooks(books); // Initially display all books
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = () => {
    const results = books.filter((book) =>
      book.bookTittle.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(results);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    const results = books.filter(
      (book) => book.subject.toLowerCase() === category.toLowerCase()
    );
    setFilteredBooks(results);
  };

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory("");
    setFilteredBooks(books);
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
      <button onClick={resetFilters} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <div style={{ margin: "20px 0" }}>
        <h3>Filter by Category</h3>
        <button
          onClick={() => handleCategoryFilter("Novels")}
          className={`btn ${
            selectedCategory === "Novels" ? "btn-primary" : "btn-secondary"
          }`}
        >
          Novels
        </button>
        <button
          onClick={() => handleCategoryFilter("Short Stories")}
          className={`btn ${
            selectedCategory === "Short Stories"
              ? "btn-primary"
              : "btn-secondary"
          }`}
          style={{ marginLeft: "10px" }}
        >
          Short Stories
        </button>
        <button
          onClick={() => handleCategoryFilter("Educational Books")}
          className={`btn ${
            selectedCategory === "Educational Books"
              ? "btn-primary"
              : "btn-secondary"
          }`}
          style={{ marginLeft: "10px" }}
        >
          Educational Books
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
          {filteredBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.bookTittle}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate}</td>
              <td>{book.subject}</td>
              <td>{book.status === 1 ? "Available" : "Checked Out"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBook;
