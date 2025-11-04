import React from "react";
import "./FooterSection.css";
import {
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path if needed

export default function FooterSection() {
  return (
    <footer className="footer">
      {/* 🔹 Logo Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <a
            href="https://www.meditationcafe.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Meditation Cafe Logo" className="footer-logo-img" />
          </a>
        </div>
      </div>

      <hr className="divider" />

      {/* 🔹 Middle Section */}
      <div className="footer-middle">
        {/* Instagram */}
        <div className="footer-column">
          <div className="footer-socials">
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

        {/* Contact */}
        <div className="footer-column contact">
          <h3>Contact</h3>
          <p>
            <FaPhoneAlt /> +91 7497870552
          </p>
          <p>
            <FaEnvelope /> digitalarena2099@gmail.com
          </p>
        </div>

        {/* YouTube */}
        <div className="footer-column">
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

      {/* 🔹 Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Meditation Cafe. All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
        </div>
      </div>
    </footer>
  );
}
