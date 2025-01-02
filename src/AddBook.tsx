// src/AddBook.tsx
import React, { useState } from 'react';
import './AddBook.css';

interface AddBookProps {
  onAdd: (book: { title: string; author: string }) => void;
  isAdmin: boolean;
}

const AddBook: React.FC<AddBookProps> = ({ onAdd, isAdmin }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, author });
    setTitle('');
    setAuthor('');
  };

  if (!isAdmin) {
    return <p>Access Denied. Admins only.</p>;
  }

  return (
    <div className="add-book-page">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;