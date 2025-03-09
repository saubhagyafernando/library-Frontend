// LibraryStaff.tsx
import React from 'react';

// Correctly import the image from 'src/assets'
import librarian1 from '../assets/Librarian1.jpg';  // Corrected path
import librarian2 from '../assets/Librarian2.jpg'; 
import staff1 from '../assets/Staff1.jpg'; 
import staff2 from '../assets/staff2.jpg'; 

// Define the staff data
const staffData = [
  {
    profilePic: librarian1,
    name: 'Mr. Dharmakeerthi Perera(Head of Library)',
    contactInfo: 'dharmakeerthi@example.com',
    availableTime: 'Mon-Fri, 9:00 AM - 5:00 PM'
  },
  {
    profilePic: librarian2,
    name: 'Mrs. A.M. Rathnayaka',
    contactInfo: 'Rathnayaka@example.com',
    availableTime: 'Mon-Fri, 9:00 AM - 5:00 PM'
  },
  {
    profilePic: staff1,
    name: 'Mrs. D.G. Fernando',
    contactInfo: 'Damayanthi@example.com',
    availableTime: 'Mon-Fri, 9:00 AM - 6:00 PM'
  },
  {
    profilePic: staff2,
    name: 'Mr.Pradeep kurerax',
    contactInfo: 'Pradeep@example.com',
    availableTime: 'Mon-Fri, 9:00 AM - 6:00 PM'
  },
  
];

const LibraryStaff = () => {
  return (
    <div className="staff-container">
      {/* Librarians Section */}
      <section>
        <h1>Librarians</h1>
        <div className="staff-list">
          {staffData.slice(0, 2).map((staff, index) => (  // Display first two librarians only
            <div className="staff-card" key={index}>
              <img src={staff.profilePic} alt={staff.name} className="profile-pic" />
              <h2>{staff.name}</h2>
              <p><strong>Contact Info:</strong> {staff.contactInfo}</p>
              <p><strong>Available Time:</strong> {staff.availableTime}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Staff Section */}
      <section>
        <h1>Other Staff</h1>
        <div className="staff-list">
          {staffData.slice(2).map((staff, index) => (  // Display remaining staff members
            <div className="staff-card" key={index}>
              {staff.profilePic && <img src={staff.profilePic} alt={staff.name} className="profile-pic" />}
              <h2>{staff.name}</h2>
              <p><strong>Contact Info:</strong> {staff.contactInfo}</p>
              <p><strong>Available Time:</strong> {staff.availableTime}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LibraryStaff;
