import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css"; // CSS for additional styling

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

  const images = [
    //Imagess\Library1.jpg",
    "C:\Users\Saubagya\Desktop\images\Imagess\Library2.jpg",
    "C:\Users\Saubagya\Desktop\images\Imagess\Library33.jpg",
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
