import React, { useState } from "react";
import Slider from "react-slick";
import "./TestimonialSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Import images from assets folder
import user1 from "../assets/cutomer.png";
import user3 from "../assets/customer2.png";

const testimonials = [
  {
    id: 1,
    name: "Shanu, Booking.com",
    image: user1,
    feedback:
      "It’s been about two months since I started practicing with Rupam. It definitely takes time to overcome the flow of thoughts, but his simple relaxation techniques help the mind quiet down effortlessly. I feel much calmer and more emotionally balanced now.",
  },
  {
    id: 2,
    name: "Priyanka, Publicis Sapient",
    image: user3,
    feedback:
      "I had been meditating on and off for years before joining Meditation Cafe. It’s a decision I truly cherish. Just 20 minutes of regular practice twice a day has brought a wholesome, positive change in my life. Thank you!",
  },
];

// ✅ Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const TestimonialSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    if (window.innerWidth <= 768) {
      setExpandedId(expandedId === id ? null : id);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="testimonial-section">
      <p className="testimonial-label">Testimonials</p>
      <h2 className="testimonial-heading">What Our Clients Say</h2>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t) => (
          <div
            className={`testimonial-card ${
              expandedId === t.id ? "expanded" : ""
            }`}
            key={t.id}
            onClick={() => handleCardClick(t.id)}
          >
            <img src={t.image} alt={t.name} className="testimonial-image" />
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-feedback">"{t.feedback}"</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
