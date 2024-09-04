import React, { useState } from "react";
import "./CategoryFilter.css";
import searchicon from "./search-icon.png";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(2.5);

  const categories = [
    "Electronics",
    "Clothing",
    "Home",
    "Beauty",
    "Sports",
    "Books",
  ];

  return (
    <section className="category-filter">
      <div className="container">
        <div className="categories">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category ${activeCategory === index ? "active" : ""}`}
              onClick={() =>
                setActiveCategory(activeCategory === index ? null : index)
              }
            >
              {category}
              {activeCategory === index && (
                <div className="category-dropdown">
                  <p>{category} dropdown</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="search-filter">
          <div className="search-container">
            <img src={searchicon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Search for product" />
          </div>
          <div className="filter-container">
            <label htmlFor="priceRange" className="price-label">
              Price: {priceRange.toFixed(1)} DAY1
            </label>
            <input
              type="range"
              id="priceRange"
              className="price-slider"
              min="0"
              max="5"
              step="0.1"
              value={priceRange}
              onChange={(e) => setPriceRange(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
