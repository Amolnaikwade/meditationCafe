import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ add this
import "./InstructorGallery.css";

import yoga1 from "../assets/yogaclass1.jpg";
import yoga2 from "../assets/yogaclass2.jpg";
import yoga3 from "../assets/yogaclass3.jpg";
import yoga4 from "../assets/yogaclass4.jpg";
import yoga5 from "../assets/yogaclass5.jpg";

export default function InstructorGallery() {
  const navigate = useNavigate(); // ✅ hook for navigation

  const handlePhotoClick = () => {
    navigate("/photos"); // ✅ redirects to photo page
  };

  return (
    <section className="gallery-section">
      {/* Header */}
      <div className="gallery-top">
        <span className="gallery-label">Our Gallery</span>
        <h2 className="gallery-heading">
          Instructors Customize Yoga for Your Wellness
        </h2>
        <button className="view-btn" onClick={handlePhotoClick}>
          View All Photo
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        <div className="gallery-item big" onClick={handlePhotoClick}>
          <img src={yoga1} alt="Yoga Pose 1" />
        </div>

        <div className="gallery-item small" onClick={handlePhotoClick}>
          <img src={yoga2} alt="Yoga Pose 2" />
        </div>
        <div className="gallery-item small" onClick={handlePhotoClick}>
          <img src={yoga3} alt="Yoga Pose 3" />
        </div>
        <div className="gallery-item small" onClick={handlePhotoClick}>
          <img src={yoga4} alt="Yoga Pose 4" />
        </div>
        <div className="gallery-item small" onClick={handlePhotoClick}>
          <img src={yoga5} alt="Yoga Pose 5" />
        </div>
      </div>
    </section>
  );
}
