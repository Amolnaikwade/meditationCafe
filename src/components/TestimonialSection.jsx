import React from "react";
import Slider from "react-slick";
import "./TestimonialSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import user1 from "../assets/cutomer.png";
import user3 from "../assets/customer2.png";

const testimonials = [
  {
    id: 1,
    name: "Shanu",
    role: "Booking.com",
    image: user1,
    feedback:
      "Practicing with Rupam has completely transformed my mornings. His methods are simple, calming, and truly help clear the mind. I feel lighter and more peaceful each day.",
  },
  {
    id: 2,
    name: "Priyanka",
    role: "Publicis Sapient",
    image: user3,
    feedback:
      "Meditation Cafe gave me a space to breathe and reflect. Just 20 minutes a day helps me stay grounded and positive — it’s truly life-changing.",
  },
];

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
          <div className="testimonial-card" key={t.id}>
            <img src={t.image} alt={t.name} className="testimonial-image" />
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-role">{t.role}</p>
            <p className="testimonial-feedback">{t.feedback}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
