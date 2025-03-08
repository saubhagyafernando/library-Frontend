import React from "react";
import Slideshow from "../Components/Slideshow";
import VisionAndMission from "./VisionAndMission"; // Import the VisionAndMission component
import "./Home.css";
import LibraryHours from "./LibraryHours";
import LibraryStaff from "./LibraryStaff";
import LibraryNotices from "./LibraryNotice";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Library Management System</h1>
      <Slideshow />
      <p>This system helps you manage your library efficiently.</p>
      
      {/* Download Books Section */}
      <div className="download-books">
        <h2>Download Books Online</h2>
        <p>Browse and download a wide range of books from our online collection.</p>
        <div className="download-button-container">
          <a href="/downloads" className="download-button">Download Books</a>
        </div>
      </div>
      
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/ZgSQALiHatM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Add the Vision and Mission section */}
      <VisionAndMission />
      <LibraryHours />
      <LibraryStaff />
      <LibraryNotices />
    </div>
  );
};

export default Home;