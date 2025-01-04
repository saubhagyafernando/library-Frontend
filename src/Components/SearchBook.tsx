import { useState } from 'react';

const SearchBook = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // Mock search results
    setResults(['Book 1', 'Book 2', 'Book 3']);
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
      <ul>
        {results.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBook;
