import React from "react";
import Slider from "react-slick";
import "./TestimonialSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import images from assets folder
import user1 from "../assets/cutomer.png";
import user2 from "../assets/avatar2.jpg";
import user3 from "../assets/customer2.png";
import user4 from "../assets/avatar3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Shanu, Booking.com",
    image: user1,
    feedback:
      "It’s been about two months since I started practicing with Rupam.It definitely takes time to overcome the flow of thoughts, but his simple relaxation techniques help the mind quiet down effortlessly. I feel much calmer and more emotionally balanced now.",
 
  },
 
  {
    id: 3,
    name: "Priyanka, Publicis Sapient",
    image: user3,
    feedback:
      "I had been meditating on and off for years before joining Meditation Cafe.It’s a decision I truly cherish. Just 20 minutes of regular practice twice a day has brought a wholesome, positive change in my life. Thank you!                                          ",
  },
 
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <p className="testimonial-label">Testimonial</p>
      <h2 className="testimonial-heading">What Our Clients Say</h2>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
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
