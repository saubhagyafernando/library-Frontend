// src/Books.tsx
import React, { useState } from 'react';
import './Books.css';

interface Book {
  id: number;
  title: string;
  author: string;
}

const initialBooks: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

const Books: React.FC = () => {
  const [books] = useState<Book[]>(initialBooks);

  return (
    <div className="books-page">
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default Books;