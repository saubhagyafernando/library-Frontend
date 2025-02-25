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