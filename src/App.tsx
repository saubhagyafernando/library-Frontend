// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import AddBook from './AddBook';
import Login from './Login';
import './App.css';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add-book" element={<AddBook onAdd={() => {}} isAdmin={isAdmin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;