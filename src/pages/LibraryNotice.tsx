// src/LibraryNotices.tsx
import React from 'react';

// Example notices hardcoded directly in the component
const libraryNotices = [
  {
    id: 1,
    title: 'Holiday Closure: Christmas',
    message: 'The library will be closed on December 25th, 2025, for the Christmas holiday. Please plan your visits accordingly.',
    date: '2025-12-25',
  },
  {
    id: 2,
    title: 'Extended Summer Hours',
    message: 'Starting from June 1st, 2025, the library will be open from 9:00 AM to 7:00 PM, Monday to Saturday, for the summer season.',
    date: '2025-06-01',
  },
  {
    id: 3,
    title: 'New Year’s Day Hours',
    message: 'The library will be operating with special hours on January 1st, 2025. We will be open from 10:00 AM to 2:00 PM only.',
    date: '2025-01-01',
  },
  {
    id: 4,
    title: 'Book Donation Drive',
    message: 'Join us in our annual book donation drive. We are accepting books in good condition from May 1st to May 31st, 2025.',
    date: '2025-05-01',
  },
  {
    id: 5,
    title: 'Late Fee Policy Update',
    message: 'Please note that starting from July 1st, 2025, late fees will increase to $0.50 per day per item.',
    date: '2025-07-01',
  },
];

const LibraryNotices: React.FC = () => {
  return (
    <div className="library-notices-container">
      <h1>Library Notices</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {libraryNotices.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.title}</td>
              <td>{new Date(notice.date).toLocaleDateString()}</td>
              <td>{notice.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryNotices;

