import React from "react";
import "./FooterSection.css";
import {
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function FooterSection() {
  return (
    <footer className="footer">
      {/* 🔹 Line 1: Logo */}
      <div className="footer-top">
        <a
          href="https://www.meditationcafe.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Meditation Cafe Logo" className="footer-logo-img" />
        </a>
      </div>

      {/* 🔹 Line 2: Icons + Contact */}
      <div className="footer-middle">
        <div className="footer-inline">
          <a
            href="https://www.instagram.com/meditation_cafe_in?igsh=MjNybXNla285NG12"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@meditation_cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaYoutube />
          </a>
          <span className="contact-inline">
            <FaPhoneAlt /> +91 7497870552
          </span>
          <span className="contact-inline">
            <FaEnvelope /> digitalarena2099@gmail.com
          </span>
        </div>
      </div>

      {/* 🔹 Line 3: Bottom */}
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
