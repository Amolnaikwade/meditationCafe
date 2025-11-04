import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with link */}
        <div className="navbar-left">
          <a
            href="https://meditationcafe.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="PureMind Logo" className="navbar-logo" />
          </a>
        </div>

        {/* Hamburger Menu (mobile) */}
       
      </div>
    </nav>
  );
};

export default Navbar;
