import "./FooterStyles.css";

import React from "react";

import { Link, NavLink } from "react-router-dom";

import {
  // FaAddressCard,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaAddressCard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaAddressCard
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />

            <div>
              <p>D57 West Patel Nagar </p>
              <p>New Delhi , 110008</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9711489594
            </h4>
          </div>

          <div className="Email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              growwebservices@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            At Grow Web Services, we believe in the power of accessible and
            affordable digital presence for businesses and individuals alike.
            Our company was founded with a mission to empower entrepreneurs,
            startups, and small businesses by providing high-quality websites at
            a remarkably minimal cost.
          </p>

          <div className="social">
            <h4>Follow us</h4>
            <a
              href="https://www.instagram.com/grow_web_services_?igsh=YzVkODRmOTdmMw=="
              target="insta"
            >
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/growwebservices/"
              target="Linkedin"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <h1 className="ourRights">
        All Right Reserved &copy; Grow Web Services{" "}
      </h1>
    </div>
  );
};

export default Footer;
