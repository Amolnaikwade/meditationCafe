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
          <h3 className="plan-title">प्रारम्भ · The Beginning</h3>
          <h2 className="plan-price"></h2>
          <ul className="plan-features">
            <li className="included">✔ 4 days</li>
            <li className="included">✔ Relaxation Techniques</li>
            <li className="included">✔ Basic Meditative Pranayama</li>
            <li className="included">✔ Q&A Sessions</li>
            <li className="excluded">✖ Advanced Pranayama Techniques</li>
            <li className="excluded">✖ Posture Correction</li>
            <li className="excluded">✖ Diet Plan</li>
            <li className="excluded">✖ Q&A with Senior Monks</li>
          </ul>
          <button
      className="purchase-btn"
      onClick={() => {
        const whatsappNumber = "917838560552"; // ✅ your WhatsApp number (no + or spaces)
        const message = "I want to join 3 day upcoming free session.";
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");
      }}
    >
      Join Upcoming 3 Days Free Session
    </button>
        </div>

        {/* Intermediate Plan */}
        <div className="pricing-card popular">
          <h3 className="plan-title">साधना · The Practice</h3>
          <h2 className="plan-price">
            Rs 1500<span>/month</span>
          </h2>
          <ul className="plan-features">
            <li className="included">✔ 1 month</li>
            <li className="included">✔ Hand-Holding Guidance</li>
            <li className="included">✔ Longer Sitting Practice</li>
            <li className="included">✔ Bi-Weekly Meetings</li>
            <li className="included">
              ✔ Advanced Techniques (based on student progress)
            </li>
            <li className="included">✔ Silence Retreat in the Himalayas</li>
            <li className="included">✔ Q&A with Senior Monks</li>
          </ul>
          <button
    className="purchase-btn active"
    onClick={() => {
      const whatsappNumber = "917838560552"; // ✅ Replace with your WhatsApp number (no '+' or spaces)
      const message = "Hi! I want to purchase the Rs 1500 'साधना · The Practice' course.";
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappLink, "_blank");
    }}
  >
    Purchase Now
  </button>
        </div>
      </div>
    </section>
  );
}
