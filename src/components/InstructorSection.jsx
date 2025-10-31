import React from "react";
import "./InstructorSection.css";
import instructorImage from "../assets/yoga-main.jpg"; // replace with your actual image

const InstructorSection = () => {
  return (
    <section className="instructor-section">
      {/* Left Side Content */}
      <div className="instructor-content">
        <div className="instructor-header">
          <div className="instructor-label">3 Days Journey</div>
          
        </div>

        <h2 className="instructor-title">
          Discover calm, clarity, and focus — one day at a time.
        </h2>

        <div className="instructor-list">
          <div className="instructor-item">
          <h3>🕉 Day 1 – Relaxation</h3>
           <p className="role">Release tension through gentle body awareness and grounding techniques for deep relaxation.</p>
            
            <span className="arrow"></span>
          </div>
        <div className="instructor-item">
          <h3>🌬 Day 2 – Meditative Pranayama</h3>
           <p className="role">Learn simple yet powerful breathing exercises that still the mind and balance inner energy.</p>
            
            <span className="arrow"></span>
          </div>
          <div className="instructor-item">
          <h3>🔔 Day 3 – Mantra Meditation</h3>
           <p className="role">Experience the uplifting vibration of sound and silence through guided mantra practice.</p>
            
            <span className="arrow"></span>
          </div>
            
        </div>
      </div>

      {/* Right Side Image */}
      <div className="instructor-image-container">
        <img src={instructorImage} alt="Yoga Instructor" className="instructor-image" />
      </div>
    </section>
  );
};

export default InstructorSection;
