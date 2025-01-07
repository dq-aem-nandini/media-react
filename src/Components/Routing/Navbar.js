import React, { useState } from "react";
import "../Routing/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import image from "../assets/images/wedmakerLogo.PNG";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main">
      <Link to="/">
        <img src={image} alt="Wedmaker Logo" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "isactive" : "")}
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "isactive" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/clientAlbum"
          className={({ isActive }) => (isActive ? "isactive" : "")}
        >
          <li>ClientAlbum</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "isactive" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
