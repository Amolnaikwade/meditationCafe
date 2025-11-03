import React from "react";
import "./YogaClassesSection.css";

const YogaClassesSection = () => {
  return (
    <section className="yoga-section">
      <div className="yoga-header">
        {/* Top Label */}
        <div className="yoga-label">Our Classes</div>

        {/* Heading */}
        <div className="yoga-heading-row">
          <h2>
            Meditation Cafe offers following types of meditation curriculum
          </h2>
        </div>
      </div>

      {/* Grid of Yoga Cards */}
      <div className="yoga-grid">
        <div className="yoga-card card1">
          <div className="yoga-img"></div>
          <div className="yoga-footer">Breath Based Meditations</div>
        </div>

        <div className="yoga-card card2">
          <div className="yoga-img"></div>
          <div className="yoga-footer">Mantra Meditations</div>
        </div>

        <div className="yoga-card card3">
          <div className="yoga-img"></div>
          <div className="yoga-footer">From Movement to Stillness</div>
        </div>

        <div className="yoga-card card4">
          <div className="yoga-img"></div>
          <div className="yoga-footer">Guests Lecture</div>
        </div>
      </div>
    </section>
  );
};

export default YogaClassesSection;
