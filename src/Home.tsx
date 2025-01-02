// src/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Library Management System</h1>
        <p>Manage your library efficiently and effectively.</p>
      </header>
      <section className="home-content">
        <div className="home-card">
          <h2>Books</h2>
          <p>View and manage all the books in the library.</p>
        </div>
        <div className="home-card">
          <h2>Add Book</h2>
          <p>Add new books to the library collection.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;