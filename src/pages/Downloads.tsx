import React, { useState, useEffect } from "react";
import "./Downloads.css";

interface Book {
  id: string;
  title: string;
  author: string;
  downloadLink: string;
  thumbnail: string;
}

const Downloads: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("programming"); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=free-ebooks&maxResults=10`
        );
        const data = await response.json();
        
        if (data.items) {
          const booksData = data.items.map((item: any) => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown",
            downloadLink: item.accessInfo.webReaderLink || item.volumeInfo.previewLink,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128"
          }));
          setBooks(booksData);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <div className="downloads-container">
      <h1>Download Free Books</h1>
      <p>Browse and download books from online platforms.</p>

      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <img src={book.thumbnail} alt={book.title} className="book-thumbnail" />
            <div>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <a href={book.downloadLink} target="_blank" rel="noopener noreferrer" className="download-button">
                Read / Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
