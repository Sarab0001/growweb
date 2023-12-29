import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg4 from "../components/heroImg4";
import AboutContent from "../components/AboutContent";
import PricingCard from "../components/PricingCard";
// import HeroImg3 from '../components/HeroImg3';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg4
        heading="About Us"
        text=" Where Your Ideas Blossom into Stunning Websites!"
      />

      <AboutContent />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
