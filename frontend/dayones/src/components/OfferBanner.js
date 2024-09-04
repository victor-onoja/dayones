import React from "react";
import "./OfferBanner.css";
import vrman from "./vrman.png";
const OfferBanner = () => {
  return (
    <section className="offer-banner">
      <div className="container banner-content">
        <div className="banner-text">
          <h2>Enter a new realm with these gadgets </h2>
          <h2>UP TO 30% OFF</h2>
          <button className="btn-buy-now">Buy Now</button>
        </div>
        <div className="banner-image">
          <img src={vrman} alt="Man wearing VR glasses" />
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
