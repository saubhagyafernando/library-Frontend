import React from "react";
import Slideshow from "../Components/Slideshow";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Library Management System</h1>
      <Slideshow />
      <p>This system helps you manage your library efficiently.</p>
    </div>
  );
};

export default Home;
