import React from "react";
import "./OfferBanner.css";
import vrman from "./vrman.png";
const OfferBanner = () => {
  return (
    <section className="offer-banner">
      <div className="container banner-content">
        <div className="banner-text">
          <h2>Offers as low as up to 50% off on Clothes and Electronics</h2>
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
