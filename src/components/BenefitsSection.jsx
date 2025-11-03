import React from "react";
import "./BenefitsSection.css";

// Replace with your actual images
import yoga1 from "../assets/yoga1.jpg";
import yoga2 from "../assets/yoga2.jpg";
import yoga3 from "../assets/yoga3.jpg";
import yoga4 from "../assets/yoga4.jpg";
import yoga5 from "../assets/yoga5.jpg";
import yoga6 from "../assets/yoga6.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      img: yoga1,
      title: "Improved Mood",
      desc: "More positive feelings, reduced negative mood.",
    },
    {
      img: yoga2,
      title: "More Positive Affect",
      desc: "Ability to feel more positive emotions, gratitude, hope, etc., even in day-to-day life.",
    },
    {
      img: yoga3,
      title: "Better attention / focus ",
      desc: "improvements even after short sessions (e.g. 30–40 min) in tasks that test alertness or vigilance.",
    },
    {
      img: yoga4,
      title: " Faster Recovery from Stress",
      desc: "After facing stressful events or emotional upsets, meditators return to calm and baseline mood faster",
    },
    {
      img: yoga5,
      title: "More Positive Affect",
      desc: " Ability to feel more positive emotions, gratitude, hope, etc., even in day-to-day life.",
    },
    {
      img: yoga6,
      title: "Mind Body Harmony",
      desc: "Foster Mind Body balance for inner peace & wellness",
    },
  ];

  return (
    <section className="benefits-section">
      {/* Section Title */}
      <div className="benefits-header">
        <span className="benefits-label">Benefits of Meditation</span>
      </div>

      {/* Responsive Grid */}
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <img
              src={item.img}
              alt={item.title}
              className="benefit-img"
              loading="lazy"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
