import "./HeroImg3Styles.css";

import React from "react";

import IntroImg from "../assets/heroImg3.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>Contact Us </h1>
        <p>Book Your Meeting Now</p>

        <div></div>
      </div>
    </div>
  );
};

export default HeroImg;
