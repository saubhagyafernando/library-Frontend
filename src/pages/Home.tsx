import React from "react";
import Slideshow from "../Components/Slideshow";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Online Library Management System</h1>
      <Slideshow />
      <p>This system helps you manage your library efficiently.</p>
    </div>
  );
};

export default Home;
