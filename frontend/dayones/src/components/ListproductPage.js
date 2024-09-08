import React, { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { parseEther } from "ethers";
import DAY1_ABI from "../constants/abi";
import CONTRACT_ADDRESS from "../constants/contract-address";
import "./ListProductPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import person from "./person-icon.png";
import priceIcon from "./price-icon.png";
import locationIcon from "./location-icon.png";
import qtyIcon from "./qty-icon.png";
import linkIcon from "./link-icon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProductPage = () => {
  const { isConnected } = useAccount();
  const { writeContract } = useWriteContract();
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isAdvertEnabled, setIsAdvertEnabled] = useState(true);
  const [productData, setProductData] = useState({
    name: "rust",
    price: "5",
    lat: "-10.8544921875",
    long: "49.82380908513249",
    quantity: "2",
    productURI:
      "https://github.com/dashingfon/dayonesDemo/blob/master/uri.json",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
  };

  const handleListProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    if (!isConnected) {
      setError("Please connect your wallet first.");
      setIsLoading(false);
      return;
    }

    const { name, price, lat, long, quantity, productURI } = productData;

    const convertToBigInt = (coordinate) => {
      const radians = (coordinate * Math.PI) / 180;
      const radiansBigInt = window.BigInt(Math.floor(radians * 10 ** 18));
      return radiansBigInt;
    };

    const latBigInt = isLocationEnabled ? convertToBigInt(parseFloat(lat)) : 0n;
    const longBigInt = isLocationEnabled
      ? convertToBigInt(parseFloat(long))
      : 0n;

    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: DAY1_ABI[0].abi,
        functionName: "listProduct",
        args: [
          {
            name,
            price: parseEther(price),
            lat: latBigInt,
            long: longBigInt,
            quantity: window.BigInt(quantity),
            productURI,
          },
        ],
      });
      toast.success("Product listed successfully!");
      setProductData({
        name: "",
        price: "",
        lat: "",
        long: "",
        quantity: "",
        productURI: "",
      });
    } catch (error) {
      console.error("Error listing product: ", error);
      setError(`Failed to list product: ${error.message}`);
      toast.error(`Failed to list product: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="list-product-page">
      <nav className="list-product-navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">dayones</span>
          </div>
          <span className="list-product-text">List Product</span>
        </div>
      </nav>

      <main className="list-product-main">
        <div className="container list-product-content">
          <div className="signup-image">
            <img src={boy} alt="Signup" className="rounded-3xl" />
          </div>
          <div className="list-product-form">
            <form onSubmit={handleListProduct}>
              <div className="form-group">
                <label htmlFor="productName">Product Name *</label>
                <div className="input-wrapper">
                  <img src={person} alt="Product" className="input-icon" />
                  <input
                    type="text"
                    id="productName"
                    placeholder="Enter product name"
                    value={productData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price *</label>
                <div className="input-wrapper">
                  <img src={priceIcon} alt="Price" className="input-icon" />
                  <input
                    type="number"
                    id="price"
                    placeholder="Enter price"
                    step="0.01"
                    value={productData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location" className="location-label">
                  Turn on Location *
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="location"
                      checked={!isLocationEnabled}
                      onChange={() => setIsLocationEnabled(!isLocationEnabled)}
                    />
                    <span className="slider round"></span>
                  </div>
                </label>
                {isLocationEnabled && (
                  <div className="input-wrapper">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="input-icon"
                    />
                    <input
                      type="text"
                      id="lat"
                      placeholder="Enter latitude"
                      value={productData.lat}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      id="long"
                      placeholder="Enter longitude"
                      value={productData.long}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantity *</label>
                <div className="input-wrapper">
                  <img src={qtyIcon} alt="Quantity" className="input-icon" />
                  <input
                    type="number"
                    id="quantity"
                    placeholder="Enter quantity"
                    min="1"
                    value={productData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="productUri">Product URI *</label>
                <div className="input-wrapper">
                  <img src={linkIcon} alt="URI" className="input-icon" />
                  <input
                    type="url"
                    id="productUri"
                    placeholder="Enter product URI"
                    value={productData.productURI}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="advert" className="location-label">
                  Enable Advert-
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="advert"
                      checked={!isAdvertEnabled}
                      onChange={() => setIsAdvertEnabled(!isAdvertEnabled)}
                    />
                    <span className="slider round"></span>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="btn-list-product"
                disabled={isLoading || !isConnected}
              >
                {isLoading ? "Listing Product..." : "List Product"}
              </button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {!isConnected && (
              <div className="warning-message">
                Please connect your wallet to list a product.
              </div>
            )}
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default ListProductPage;
