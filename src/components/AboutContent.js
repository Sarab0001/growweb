import "./AboutContentStyles.css";

import React from "react";

import { Link } from "react-router-dom";

import AboutUS1 from "../assets/AboutUS1.jpg";
import AboutUS2 from "../assets/AboutUS2.jpg";
import AboutUS3 from "../assets/AboutUS3.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      {/* //special offer  */}

      <div className="left">
        <h1>Who we Are </h1>
        <p>
          At Grow Web Services, we develop innovative and creative web design
          and development, tailor made applications, ERPs, CRMs, e-commerce
          solutions, business-to-business applications, business-to-client
          applications, managed hosting and internet portal management are few
          that we offer. Satisfied clients around the globe bear testimony to
          the quality of our work. As a leader in technology exploring, Grow Web
          Services is committed to exporting quality software worldwide. The
          general purpose of Grow Web Services is to develop and promote
          advanced information technologies for multi-user operation. Grow Web
          Services's business philosophy is to assure the highest quality
          product, total client satisfaction, timely delivery of solutions and
          the best quality/price ratio found in the industry
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>

      <div className="right">
        {/* <div className="img-container">
          <div className="img-stack top">
            <img src={AboutUS1} className="img" alt="true" />
          </div>
        </div>

        <div className="img-container">
          <div className="img-stack bottom">
            <img src={AboutUS2} className="img" alt="true" />
          </div>
        </div> */}
        <div className="img-container">
          <div className="img-stack top">
            <img src={AboutUS3} className="img" alt="true" />
          </div>
        </div>
      </div>
      <div class="about-container">
        <h1>Welcome to Grow Web Services</h1>
        <p>
          Grow Web Services is your dedicated partner in building exceptional
          websites and apps. Our team of experts is passionate about crafting
          digital solutions that elevate your online presence. Whether you're
          launching a startup or expanding your business, we are here to provide
          tailored web and app development services that meet your unique needs.
        </p>
        <p></p>
        <div>
          <div class="services-section">
            <h2>Our Services</h2>
            <p>
              Grow Web Services provides a range of digital solutions to empower
              your business. Explore our services tailored to meet your specific
              needs.
            </p>

            <div class="service">
              <h3>Website Design & Development</h3>
              <p>
                Craft visually appealing and functional websites that leave a
                lasting impression.
              </p>
            </div>

            <div class="service">
              <h3>Mobile App Development</h3>
              <p>
                Develop innovative mobile applications to reach your audience on
                the go.
              </p>
            </div>

            <div class="service">
              <h3>E-commerce Solutions</h3>
              <p>
                Create robust and secure e-commerce platforms to boost your
                online sales.
              </p>
            </div>
          </div>
        </div>
        <p class="special-offer">
          Special Offer Alert! 🚀 For startup enthusiasts, we have an exclusive
          offer to fuel your dreams. Contact us today to learn more!
        </p>
        {/* <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link> */}
      </div>
    </div>
  );
};

export default AboutContent;
