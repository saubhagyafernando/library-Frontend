import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css"; // Custom CSS for styling

// Import your images
import Library1 from "../assets/Library1.jpg";
import Library2 from "../assets/Library2.jpg";
import Library3 from "../assets/Library3.jpg";

const Slideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { src: Library1, alt: "Library 1" },
    { src: Library2, alt: "Library 2" },
    { src: Library3, alt: "Library 3" },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
