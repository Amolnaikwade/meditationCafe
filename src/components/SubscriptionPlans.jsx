import React from "react";
import "./SubscriptionPlans.css";

export default function SubscriptionPlans() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <p className="pricing-label">Pricing Plan</p>
        <h2 className="pricing-title">Choose a Subscription</h2>
      </div>

      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="pricing-card">
          <h3 className="plan-title">Basic</h3>
          <h2 className="plan-price">
            Free<span>/3 days</span>
          </h2>
          <ul className="plan-features">
            <li className="included">✔ 3 days</li>
            <li className="included">✔ Relaxation Techniques</li>
            <li className="included">✔ Basic Meditative Pranayama</li>
            <li className="included">✔ Q&A Sessions</li>
            <li className="excluded">✖ Advanced Pranayama Techniques</li>
            <li className="excluded">✖  Posture Correction</li>
            <li className="excluded">✖ Diet Plan</li>
            <li className="excluded">✖ Q&A with Senior Monks</li>
          </ul>
          <button className="purchase-btn">Purchase Now</button>
        </div>

        {/* Intermediate Plan */}
        <div className="pricing-card popular">
          <div className="popular-tag">Popular</div>
          <h3 className="plan-title">Intermediate</h3>
          <h2 className="plan-price">
            Rs 1500<span>/month</span>
          </h2>
          <ul className="plan-features">
            <li className="included">✔ 1 month</li>
            <li className="included">✔ Hand-Holding Guidance</li>
            <li className="included">✔  Longer Sitting Practice</li>
            <li className="included">✔ Bi-Weekly Meetings</li>
            <li className="included">✔ Advanced Techniques (based on student progress)</li>
            <li className="included">✔  Silence Retreat in the Himalayas</li>
            <li className="included">✔ Q&A with Senior Monks</li>
          </ul>
          <button className="purchase-btn active">Purchase Now</button>
        </div>

        
      </div>
    </section>
  );
}
