import React from "react";
import "./FeaturesSection.css";
import { FaWallet, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "Guided Meditation Sessions",
    description:
      "Experience peace through expert-led meditations designed for every level — from beginners seeking calm to seekers exploring deeper awareness.",
    icon: <FaWallet />,
  },
  {
    id: "02",
    title: "Community & Consistency",
    description:
      "Join a warm community that supports your meditation journey with daily and weekend group sessions, online and offline.",
    icon: <FaMapMarkerAlt />,
  },
  {
    id: "03",
    title: "Inspiring Guest Speakers",
    description:
      "Gain wisdom from renowned monks, teachers, and wellness experts who share practical insights for living with clarity and balance.",
    icon: <FaCertificate />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {features.map((feature) => (
        <div className="feature-card" key={feature.id}>
          <div className="feature-number">{feature.id}</div>

          <div className="flex items-center">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
          </div>

          <hr className="feature-divider" />
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
