// import "./HeroImg3Styles.css";

import React from "react";

import IntroImg from "../assets/heroImg4.jpg";
// import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>About Us </h1>
        <p>Where Your Ideas Blossom into Stunning Websites!</p>
        <div></div>
      </div>
    </div>
  );
};

export default HeroImg;
