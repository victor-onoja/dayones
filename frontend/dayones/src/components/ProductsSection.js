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
    <section className='products-section'>
      <div className='container'>
        <div className='product-grid'>
          <div className='product-item'>
            <img src={product1} alt='Product 1' />
            <h3>Smooth shopping experience</h3>
            <p>
              Shop for your everyday products while enjoying the benefits and
              security of web3.
            </p>
            <button className='btn-secondary'>
              Get Started <span className='arrow'>→</span>
            </button>
          </div>
          <div className='product-item center-image'>
            <img src={product2} alt='Product 2' className='rounded-3xl' />
          </div>
          <div className='product-item reverse'>
            <img src={product3} alt='Product 3' />
            <button className='btn-secondary'>
              Learn More <span className='arrow'>→</span>
            </button>
            <p>
              Get fast and affordable delivery with real-time product tracking
              every step of the way.
            </p>
            <h3>Seamless Deliveries</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
