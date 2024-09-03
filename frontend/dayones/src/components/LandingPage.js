import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ProductsSection from "./ProductsSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <Footer />
    </>
  );
};

export default LandingPage;
