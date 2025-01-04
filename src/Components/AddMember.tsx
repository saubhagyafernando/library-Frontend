import { useState } from 'react';

const AddMember = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Member');
  const [id, setId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `${role}-${Math.floor(Math.random() * 1000)}`;
    setId(generatedId);
    alert(`Member/Admin added with ID: ${generatedId}`);
  };

  return (
    <div>
      <h2>Add Member/Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Member">Member</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {id && <p>Generated ID: {id}</p>}
    </div>
  );
};

export default AddMember;
