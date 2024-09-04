import React from "react";
import "./FeaturesSection.css";
import icon from "./icon.png";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2>Get started in a few easy steps</h2>
        <div className="features-grid">
          <div className="feature">
            <img src={icon} alt="Sell Products Icon" />
            <h3>Sell products and advertise</h3>
            <p>Sell products and advertise them efficiently.</p>
          </div>
          <div className="feature">
            <img src={icon} alt="Buy Products Icon" />
            <h3>Shop for products</h3>
            <p>
              Shop for your favorite products and get paid for advertisements.
            </p>
          </div>
          <div className="feature">
            <img src={icon} alt="Manage Orders Icon" />
            <h3>Manage Orders</h3>
            <p>Track and manage your orders with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
