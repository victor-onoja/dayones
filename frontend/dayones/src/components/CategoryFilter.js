import React, { useState } from "react";
import "./CategoryFilter.css";
import searchicon from "./search-icon.png";
import filtericon from "./filter-icon.png";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

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
              {/* <span className="dropdown-icon">▼</span> */}
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
            <button
              className="btn-filter"
              onClick={() => setShowFilter(!showFilter)}
            >
              <img src={filtericon} alt="Filter" />
              Filter by
            </button>
            {showFilter && (
              <div className="filter-dropdown">
                <p>Price</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
