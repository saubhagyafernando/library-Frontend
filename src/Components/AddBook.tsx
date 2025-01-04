import { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [availability, setAvailability] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Book "${title}" added with availability: ${availability}`);
  };

  return (
    <div>
      <h2>Add/Update Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Available:</label>
        <input
          type="checkbox"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
