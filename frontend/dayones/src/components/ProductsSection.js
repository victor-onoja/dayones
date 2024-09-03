import React from "react";
import "./ProductsSection.css";
import product1 from "./product-image1.png";
import product2 from "./product-image2.png";
import product3 from "./product-image3.png";
import chainlink from "./chainlink-logo.png";

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="product-grid">
          <div className="product-item">
            <img src={product1} alt="Product 1" />
            <h3>Smooth shopping experience</h3>
            <p>
              Shop for your everyday products while enjoying the benefits and
              security of web3
            </p>
            <button className="btn-secondary">
              Get Started <span className="arrow">→</span>
            </button>
          </div>
          <div className="product-item center-image">
            <img src={product2} alt="Product 2" />
          </div>
          <div className="product-item reverse">
            <h3>Secure transactions</h3>
            <p>
              Experience safe and transparent transactions powered by blockchain
              technology
            </p>
            <button className="btn-secondary">
              Learn More <span className="arrow">→</span>
            </button>
            <img src={product3} alt="Product 3" />
          </div>
        </div>
        <div className="powered-by">
          <h4>Powered by:</h4>
          <div className="partner-logos">
            <div className="partner">
              <img src={chainlink} alt="Chainlink Logo" />
              <span>Chainlink</span>
            </div>
            {/* Add more partner logos here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
