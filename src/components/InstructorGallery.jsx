import React from "react";
import Slider from "react-slick";
import "./InstructorGallery.css";

import yoga1 from "../assets/yogaclass1.jpg";
import yoga2 from "../assets/yogaclass2.jpg";
import yoga3 from "../assets/yogaclass3.jpg";
import yoga4 from "../assets/yogaclass4.jpg";
import yoga5 from "../assets/yogaclass5.jpg";

export default function InstructorGallery() {
  const images = [yoga1, yoga2, yoga3, yoga4, yoga5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="gallery-section">
      <div className="gallery-top">
        <span className="gallery-label">Our Gallery</span>
      </div>

      <div className="gallery-slider-wrapper">
        <Slider {...settings} className="gallery-slider">
          {images.map((img, index) => (
            <div key={index} className="gallery-slide">
              <div className="yoga">
                <img src={img} alt={`Yoga ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
