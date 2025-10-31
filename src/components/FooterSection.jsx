import React from "react";
import "./FooterSection.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path if needed

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="PureMind Logo" className="footer-logo-img" />
          
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-middle">
        <div className="footer-column">
          <div className="footer-socials">
            {/* ✅ Instagram Icon */}
            <a
              href="https://www.instagram.com/meditation_cafe_in?igsh=MjNybXNla285NG12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>
            <FaPhoneAlt /> +91 7497870552
          </p>
          <p>
            <FaEnvelope /> hello@yoga.mail.com
          </p>
        </div>

        {/* ✅ Replaced Newsletter section with YouTube link */}
        <div className="footer-column">
          <h3>Subscribe</h3>
          <p>Subscribe for more information.</p>
          <div className="footer-socials">
            <a
              href="https://www.youtube.com/@meditation_cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>Copyright © 2024 Meditation Cafe. All Rights Reserve</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
        </div>
      </div>
    </footer>
  );
}
