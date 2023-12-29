import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import Form from "../components/Form";
import AboutContent from "../components/AboutContent";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      {/* <PricingCard /> */}
      <AboutContent />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
