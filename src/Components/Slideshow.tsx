import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css"; // Custom CSS for styling

// Import your images
import Library1 from "../assets/Library1.jpg";
import Library2 from "../assets/Library2.jpg";
import Library3 from "../assets/Library3.jpg";
import Library4 from "../assets/Library4.jpg";
import Library5 from "../assets/Library5.jpg";
import Library6 from "../assets/Library6.jpg";
import Library7 from "../assets/Library7.jpg";
import Library8 from "../assets/Library8.jpg";
import Library9 from "../assets/Library9.jpg";
import Library10 from "../assets/Library10.jpg";

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
    { src: Library4,  alt: "Library 4"},
    { src: Library5, alt: "Library 5" },
    { src: Library6, alt: "Library 6" },
    { src: Library7, alt: "Library 7" },
    { src: Library8, alt: "Library 8" },
    { src: Library9, alt: "Library 9" },
    { src: Library10, alt: "Library 10" }
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
