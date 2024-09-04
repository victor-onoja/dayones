import React from "react";
import "./ProductsSection.css";
import product1 from "./product-image1.png";
import product2 from "./product-image2.png";
import product3 from "./product-image3.png";
// import chainlink from "./chainlink-logo.png";
import liskicon from "./lisk-icon.png";
import web3bridgeicon from "./web3-bridge-icon.png";
import web3lagosicon from "./web3-lagos-icon.png";
import web3jsicon from "./web3js-icon.png";
import zksyncicon from "./zksync-icon.png";

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
              security of web3.
            </p>
            <button className="btn-secondary">
              Get Started <span className="arrow">→</span>
            </button>
          </div>
          <div className="product-item center-image">
            <img src={product2} alt="Product 2" />
          </div>
          <div className="product-item reverse">
            <img src={product3} alt="Product 3" />
            <button className="btn-secondary">
              Learn More <span className="arrow">→</span>
            </button>
            <p>
              Get fast and affordable delivery with real-time product tracking
              every step of the way.
            </p>
            <h3>Seamless Deliveries</h3>
          </div>
        </div>
        <div className="powered-by">
          <h4>Powered by:</h4>
          <div className="partner-logos">
            <div className="partner">
              <img src={liskicon} alt="lisk Logo" />
              <span>Lisk</span>
            </div>
            <div className="partner">
              <img src={web3bridgeicon} alt="web3 bridge Logo" />
              <span>Web3 Bridge</span>
            </div>
            <div className="partner">
              <img src={web3lagosicon} alt="web3 lagos Logo" />
              <span>Web3 Lagos</span>
            </div>
            <div className="partner">
              <img src={web3jsicon} alt="web3js Logo" />
              <span>Web3JS</span>
            </div>
            <div className="partner">
              <img src={zksyncicon} alt="zksync Logo" />
              <span>zkSync</span>
            </div>
            {/* Add more partner logos here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
