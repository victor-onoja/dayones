import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, MapPin } from "lucide-react";
import logo from "./logo.png";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Fetch product data based on id
    // For now, we'll use mock data
    const mockProduct = {
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
          "https://images.pexels.com/photos/16052506/pexels-photo-16052506/free-photo-of-a-dji-air-2s-drone-is-flying-and-beautiful-clouds-on-the-background-at-sharpenhoe-clappers-luton-england-uk-image-was-captured-on-22-march-2023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/4077330/pexels-photo-4077330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1838248/pexels-photo-1838248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        description:
          "This is a one of a kind quadcopter drone that is gotten from outer space, it is very durable and can be used as a delivery machine",
        category: "Electronics",
      },
    };

    setProduct(mockProduct);
    setSelectedImage(mockProduct.productURI.mainImage);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <div className="product-images">
        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>
        <div className="image-thumbnails">
          <img
            src={product.productURI.mainImage}
            alt={product.name}
            onClick={() => setSelectedImage(product.productURI.mainImage)}
            className={
              selectedImage === product.productURI.mainImage ? "selected" : ""
            }
          />
          {product.productURI.otherImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? "selected" : ""}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <div className="product-meta">
          <span className="product-price">
            <img src={logo} alt="Day One" className="dayones-logo" />
            {product.price} DAY1
          </span>
          <span className="product-quantity">Quantity: {product.quantity}</span>
        </div>
        <p className="product-description">{product.productURI.description}</p>
        {/* <div className="product-keywords">
          {product.productURI.keywords.map((keyword, index) => (
            <span key={index} className="keyword">
              {keyword}
            </span>
          ))}
        </div> */}
        <div className="product-keywords">
          <strong>Category:</strong> {product.productURI.category}
        </div>
        <div className="product-location">
          <MapPin size={16} />
          <span>
            Location: {product.lat / 1000000}, {product.long / 1000000}
          </span>
        </div>
        <div className="product-vendor">
          <span>Vendor: {product.vendor}</span>
        </div>
        <div className="product-actions">
          <button className="add-to-cart">
            <ShoppingCart size={20} />
            Add to Cart
          </button>
          <button
            className={`favorite-button ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={20} />
            {isFavorite ? "Favorited" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
