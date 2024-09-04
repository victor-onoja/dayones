import React from "react";
import "./HeroSection.css";
import girl from "./girl-with-bags.png";
import { PrimaryButton, SecondaryButton } from "./buttons";

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='container hero-content'>
        <div className='hero-text'>
          <h1>
            Experience seamless transactions in a decentralized marketplace
          </h1>
          <p>
            Welcome to the future of e-commerce. Our platform empowers you to
            trade safely and securely using cryptocurrency by leveraging the
            power and security of blockchain and smart contracts.
          </p>
          <div className='hero-buttons'>
            <SecondaryButton children={'Read more'} />
            <PrimaryButton children={'Get Started →'} />
          </div>
        </div>
        <div className='hero-image'>
          <img src={girl} alt='Girl carrying shopping bags' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
