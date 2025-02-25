import React from 'react';
import './LibraryHours.css'; // Import the CSS file

// Define the type for the library hours data
interface LibraryHour {
  day: string;
  open: string;
  close: string;
}

// Library hours data
const libraryHours: LibraryHour[] = [
  { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '9:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '10:00 AM', close: '4:00 PM' },
  { day: 'Sunday', open: 'Closed', close: 'Closed' },
];

// Component to render the library hours table
const LibraryHours: React.FC = () => {
  return (
    <div className="table-container">
      <h1 className="library-hours-heading">Library Hours</h1>
      <table className="library-hours-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Opening Time</th>
            <th>Closing Time</th>
          </tr>
        </thead>
        <tbody>
          {libraryHours.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.open}</td>
              <td>{entry.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryHours;