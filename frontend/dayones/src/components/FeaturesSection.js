import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div>
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
      <div className='absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-green-800 to-transparent' />
      <div className='absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-green-800 to-transparent' />
    </div>
    </section>
  );
};

export default FeaturesSection;
