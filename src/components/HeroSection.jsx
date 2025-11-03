import React from "react";
import mainYoga from "../assets/yoga-main.jpg";
import stripe from "../assets/image.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import logo from "../assets/logo2.png";
import "./HeroSection.css";

const HeroSection = () => {
  // ✅ Function to handle WhatsApp redirection
  const handleJoinClick = () => {
    const whatsappLink =
      "https://wa.me/917838560552?text=Hi!%20I%20want%20to%20join%20the%20upcoming%20free%20session."; // replace with your number
    window.open(whatsappLink, "_blank"); // opens in new tab
  };

  return (
    <div className="hero-container">
      {/* ✅ Left Side Text Section */}
      <div className="hero-text">
        <h1 className="hero-heading">
         Find Stillness<br /> Amid  the Noise
        </h1>

        <p className="hero-paragraph">
          A journey inward-through breath<br />
          sound, and silence
           <br/>
        </p>

        {/* ✅ Button now opens WhatsApp */}
        <button className="hero-btn" onClick={handleJoinClick}>
          Join Upcoming Free Session
        </button>

        {/* 👥 User Avatars */}
        <div className="user-avatars">
          <img src={avatar1} alt="User 1" className="avatar" />
          <img src={avatar2} alt="User 2" className="avatar overlap" />
          <img src={avatar3} alt="User 3" className="avatar overlap" />
          <span className="user-count">
            Loved by our regular meditation community

          </span>
        </div>

        {/* ⭐ Star Rating */}
        <div className="heart-rating">
  <span className="heart filled">❤️</span>
  <span className="heart filled">❤️</span>
  <span className="heart filled">❤️</span>
  <span className="heart filled">❤️</span>
  <span className="heart">🤍</span>
  <span className="rating-text">4.8 / 5.0 ratings</span>
</div>


        {/* 🌈 Stripe Image */}
        <div className="stripe-wrapper">
          <img src={stripe} alt="Stripe Design" className="stripe-image" />
        </div>
      </div>

      {/* 🧘‍♀️ Right Side Yoga Image */}
      <div className="hero-image-container">
        <img src={mainYoga} alt="Yoga Pose" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
