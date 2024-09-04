import React, { useState } from "react";
import { Heart } from "lucide-react";
import logo from "./logo.png";
import "./ProductList.css";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart size={20} />
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-price-container">
          <img src={logo} alt="Day One" className="dayones-logo" />
          <span className="product-price">{product.price} day1</span>
        </div>
        <button
          className={`add-to-cart-button ${isAdded ? "added" : ""}`}
          onClick={() => setIsAdded(!isAdded)}
        >
          {isAdded ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

const ProductList = ({ horizontal = false }) => {
  // Mock data for demonstration
  const products = [
    {
      id: 1,
      title: "Black dslr camera",
      category: "Electronics",
      price: 0.2,
      image:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Grey and green quadcopter drone",
      category: "Electronics",
      price: 0.1,
      image:
        "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Grey and green quadcopter drone",
      category: "Electronics",
      price: 0.1,
      image:
        "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 1,
      title: "Black dslr camera",
      category: "Electronics",
      price: 0.2,
      image:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 1,
      title: "Black dslr camera",
      category: "Electronics",
      price: 0.2,
      image:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 1,
      title: "Black dslr camera",
      category: "Electronics",
      price: 0.2,
      image:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className={`product-list ${horizontal ? "horizontal" : "vertical"}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
