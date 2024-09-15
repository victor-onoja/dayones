import React, { useState } from "react";
// import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./ProductList.css";

const ProductCard = ({ product, myProducts }) => {
  // const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img
            src={product.productURI.mainImage}
            alt={product.name}
            className="product-image"
          />
          {/* <button
            className={`favorite-button ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={20} />
          </button> */}
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-category">
            {product.category}
            {/* {product.productURI.keywords.join(", ")} */}
          </p>
          <div className="product-price-container">
            <img src={logo} alt="Day One" className="dayones-logo" />
            <span className="product-price">{product.price} DAY1</span>
          </div>
        </div>
      </Link>
      {!myProducts ? (
        <button
          className={`add-to-cart-button ${isAdded ? "added" : ""}`}
          onClick={(e) => {
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "Added to cart" : "Add to cart"}
        </button>
      ) : (
        <div className="my-products-buttons">
          <button className="unlist-product-button">Unlist Product</button>
          <button className="update-product-button">Update Product</button>
        </div>
      )}
    </div>
  );
};

const ProductList = ({ horizontal = false, myProducts = false }) => {
  // Mock data for demonstration
  const products = [
    {
      id: 1,
      vendor: "0x1234567890123456789012345678901234567890",
      name: "Full Coffee Mug",
      price: 0.2,
      lat: 40712776,
      long: -74005974,
      quantity: 10,
      productURI: {
        mainImage:
          "https://images.pexels.com/photos/942772/pexels-photo-942772.jpeg?auto=compress&cs=tinysrgb&w=800",
        otherImages: [
          "https://images.pexels.com/photos/942772/pexels-photo-942772.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/942772/pexels-photo-942772.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/942772/pexels-photo-942772.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        description:
          "This is a one of a kind coffee mug that is gotten from outer space, it is very durable and can be used for tea as well",
        // keywords: ["bag", "fashion", "carryable"],
        // change keywords to category in solidity fon
        category: "Home",
      },
    },
    {
      id: 2,
      vendor: "0x1234567890123453709616345678901264567890",
      name: "Black Serious Shoe",
      price: 0.5,
      lat: 40714476,
      long: -74005004,
      quantity: 10,
      productURI: {
        mainImage:
          "https://images.pexels.com/photos/296158/pexels-photo-296158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        otherImages: [
          "https://images.pexels.com/photos/296158/pexels-photo-296158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/296158/pexels-photo-296158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/296158/pexels-photo-296158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        description:
          "This is a one of a kind serious shoe that is gotten from outer space, it is very durable and can be used as a defensive weapon",
        category: "Fashion",
      },
    },
    {
      id: 3,
      vendor: "0x1234567890689056789012357437901234567890",
      name: "Placebo Pills",
      price: 0.12,
      lat: 40788776,
      long: -74075974,
      quantity: 10,
      productURI: {
        mainImage:
          "https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        otherImages: [
          "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        description:
          "This is a one of a kind placebo pill that is gotten from outer space, it is very durable and can be used as a sleeping pill",
        category: "Home",
      },
    },
    {
      id: 4,
      vendor: "0x123456789012345678901234567890664777890",
      name: "Luxury Glasses",
      price: 0.22,
      lat: 40710076,
      long: -74665974,
      quantity: 10,
      productURI: {
        mainImage:
          "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        otherImages: [
          "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        description:
          "This is a one of a kind luxury glasses that is gotten from outer space, it is very durable and can be used as a sun shield",
        category: "Fashion",
      },
    },
    {
      id: 5,
      vendor: "0x1234567890123456789012345678901234567890",
      name: "Quadcopter Drone",
      price: 0.29,
      lat: 40772776,
      long: -74005004,
      quantity: 10,
      productURI: {
        mainImage:
          "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
        otherImages: [
          "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        description:
          "This is a one of a kind quadcopter drone that is gotten from outer space, it is very durable and can be used as a delivery machine",
        category: "Electronics",
      },
    },
    {
      id: 6,
      vendor: "0x1234567890123456789012345678661234567890",
      name: "Cassette Tape",
      price: 0.4,
      lat: 40702776,
      long: -74005900,
      quantity: 10,
      productURI: {
        mainImage:
          "https://images.pexels.com/photos/590663/pexels-photo-590663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        otherImages: [
          "https://images.pexels.com/photos/590663/pexels-photo-590663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/590663/pexels-photo-590663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/590663/pexels-photo-590663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        description:
          "This is a one of a kind cassette bag that is gotten from outer space, it is very durable and can be used as a throwing material",
        category: "Electronics",
      },
    },
  ];

  return (
    <div className={`product-list ${horizontal ? "horizontal" : "vertical"}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          myProducts={myProducts}
        />
      ))}
    </div>
  );
};

export default ProductList;
