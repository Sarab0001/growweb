import { FaRupeeSign } from "react-icons/fa";
import "./PricingCardStyles.css";
import { Link } from "react-router-dom";
import React from "react";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- BASIC -</h3>
          <span className="bar"></span>
          {/* <p className="btc">
            {" "}
            <FaRupeeSign /> 9000/-
          </p> */}
          <p>- 4 Pages -</p>
          <p>- Informative -</p>
          <p>- Featured -</p>
          <p>- Foundational -</p>
          <p>- Resposnsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- DYNAMIC -</h3>
          <span className="bar"></span>
          {/* <p className="btc">
            {" "}
            <FaRupeeSign /> 15000
          </p> */}
          <p>- 5 Pages -</p>
          <p>- Interactive -</p>
          <p>- Real-time -</p>
          <p>- Adaptive -</p>
          <p>- Resposnsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- E-COMMERCE -</h3>
          <span className="bar"></span>
          <p>- 8 Pages -</p>
          <p>- Shopping -</p>
          <p>- Checkout -</p>
          <p>- Featured -</p>
          <p>- Transactional -</p>
          <p>- Resposnsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
