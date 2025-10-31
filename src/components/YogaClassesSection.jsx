import React from "react";
import "./YogaClassesSection.css";

const YogaClassesSection = () => {
  return (
    <section className="yoga-section">
      <div className="yoga-header">
        {/* Top Label */}
        <div className="yoga-label">Our Classes</div>

        {/* Heading + Button in Same Line */}
        <div className="yoga-heading-row">
          <h2>Meditation Cafe offers following types fo meditation curriculum
</h2>
          
        </div>
      </div>

      <div className="yoga-grid">
        {/* Top Row */}
        <div className="yoga-card card1">
          <div className="yoga-img"></div>
          <div className="yoga-footer">Breath Based Meditations</div>
        </div>

        <div className="yoga-card card2">
          <div className="yoga-img"></div>
          <div className="yoga-footer">Mantra Meditations</div>
        </div>

        {/* Bottom Row */}
        <div className="yoga-card card3">
          <div className="yoga-img"></div>
          <div className="yoga-footer">From Movement to Stillness</div>
        </div>

        <div className="yoga-card card4">
          <div className="yoga-img"></div>
          <div className="yoga-footer">Guided meditation by Guests </div>
        </div>
      </div>
    </section>
  );
};

export default YogaClassesSection;
