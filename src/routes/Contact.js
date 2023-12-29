import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from "../components/HeroImg3";

import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar />

      <HeroImg3 heading="CONTACT" text="Book your appointment" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
