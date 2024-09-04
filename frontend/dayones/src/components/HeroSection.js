import React from "react";
import "./HeroSection.css";
import girl from "./girl-with-bags.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>The Safest Way to Shop Online</h1>
          <p>
            What if you could shop with ZERO fear of fraud? Dayones gives you
            the peace of mind to shop safely and securely using the power and
            security of blockchain technology.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started <span className="arrow">→</span>
            </button>
            <button className="btn-secondary">Read More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={girl} alt="Girl carrying shopping bags" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
