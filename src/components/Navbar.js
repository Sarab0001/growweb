import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/GrowLogo.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div>
        <Link to="/" className="linkClass">
          <nav className="navbar">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
          </nav>
          <h1>Grow Web Services</h1>
        </Link>
      </div>

      <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
