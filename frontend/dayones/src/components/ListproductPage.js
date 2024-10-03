// imports
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  useWatchContractEvent,
} from "wagmi";
import { parseEther } from "ethers";
import DAY1_ABI from "../constants/abi";
import CONTRACT_ADDRESS from "../constants/contract-address";
import MAP_API_KEY from "../constants/mapkey";
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

// main code
const ListProductPage = () => {
  // state variables
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const {
    writeContract,
    data: hash,
    isPending,
    error: writeError,
  } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isAdvertEnabled, setIsAdvertEnabled] = useState(false);
  const [isProductListed, setIsProductListed] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    lat: "",
    long: "",
    quantity: "1",
    productURI: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi: DAY1_ABI[0].abi,
    eventName: "ProductListed",
    onLogs(logs) {
      console.log("Product Listed Event:", logs);
      setIsProductListed(true);
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  // functions

  const validateForm = () => {
    const errors = {};
    if (!productData.name.trim()) errors.name = "Product name is required";
    if (!productData.price || parseFloat(productData.price) <= 0)
      errors.price = "Price must be greater than zero";
    if (!productData.quantity || parseInt(productData.quantity) <= 0)
      errors.quantity = "Quantity must be greater than zero";
    if (!productData.productURI.trim())
      errors.productURI = "Product URI is required";
    if (isLocationEnabled && (!productData.lat || !productData.long)) {
      errors.location = "Location is required when enabled";
    } else if (!isLocationEnabled && !productData.address.trim()) {
      errors.address = "Address is required when location is not enabled";
    }
    return errors;
  };

  const getCoordinatesFromAddress = async (address) => {
    try {
      const encodedAddress = encodeURIComponent(address);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${MAP_API_KEY}`
      );
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat: lat.toString(), long: lng.toString() };
      } else {
        throw new Error("Unable to geocode address");
      }
    } catch (error) {
      console.error("Error in geocoding:", error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const handleListProduct = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsLoading(true);
    setError(null);
    setIsProductListed(false);
    if (!isConnected) {
      setError("Please connect your wallet first.");
      setIsLoading(false);
      return;
    }

    let { name, price, lat, long, quantity, productURI, address } = productData;

    if (!isLocationEnabled) {
      try {
        const coordinates = await getCoordinatesFromAddress(address);
        lat = coordinates.lat;
        long = coordinates.long;
      } catch (error) {
        console.error("Error getting coordinates:", error);
        setError(
          "Failed to get coordinates from address. Please check the address and try again."
        );
        setIsLoading(false);
        return;
      }
    }

    const convertToBigInt = (coordinate) => {
      const radians = (parseFloat(coordinate) * Math.PI) / 180;
      return window.BigInt(Math.floor(radians * 10 ** 18));
    };

    const latBigInt = convertToBigInt(lat);
    const longBigInt = convertToBigInt(long);

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
      toast.info("Transaction submitted. Waiting for confirmation...");
      console.log(name, price, lat, long, quantity, productURI, address);
    } catch (error) {
      console.error("Error listing product: ", error);
      setError(`Failed to list product: ${error.message}`);
      toast.error(`Failed to list product: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  // use effect

  useEffect(() => {
    if (writeError) {
      setError(`Failed to list product: ${writeError.message}`);
      toast.error(`Failed to list product: ${writeError.message}`);
    }
  }, [writeError]);

  useEffect(() => {
    if (isConfirmed && !isProductListed) {
      toast.info("Transaction confirmed. Waiting for ProductListed event...");
      setProductData({
        name: "",
        price: "",
        lat: "",
        long: "",
        quantity: "1",
        productURI: "",
        address: "",
      });
    }
  }, [isConfirmed, isProductListed]);

  useEffect(() => {
    if (isProductListed) {
      toast.success("Product listed successfully! Event received.");
      navigate("/products");
    }
  }, [isProductListed, navigate]);

  useEffect(() => {
    if (isLocationEnabled) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setProductData({
            ...productData,
            lat: position.coords.latitude.toString(),
            long: position.coords.longitude.toString(),
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Failed to get your location. Please enter it manually.");
        }
      );
    }
  }, [isLocationEnabled, productData]);

  // ui
  return (
    <div className="list-product-page">
      <nav className="list-product-navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">DAYONES</span>
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
                    id="name"
                    placeholder="Enter product name"
                    value={productData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {formErrors.name && (
                  <span className="error">{formErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="price">Price *</label>
                <div className="input-wrapper">
                  <img src={priceIcon} alt="Price" className="input-icon" />
                  <input
                    type="number"
                    id="price"
                    placeholder="Enter price"
                    step="0.1"
                    value={productData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                {formErrors.price && (
                  <span className="error">{formErrors.price}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="location" className="location-label">
                  Use Current Location
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="location"
                      checked={isLocationEnabled}
                      onChange={() => setIsLocationEnabled(!isLocationEnabled)}
                    />
                    <span className="slider round"></span>
                  </div>
                </label>
                {isLocationEnabled ? (
                  <div className="input-wrapper">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="input-icon"
                    />
                    <input
                      type="text"
                      id="lat"
                      placeholder="Latitude"
                      value={productData.lat}
                      readOnly
                    />
                    <input
                      type="text"
                      id="long"
                      placeholder="Longitude"
                      value={productData.long}
                      readOnly
                    />
                  </div>
                ) : (
                  <div className="input-wrapper">
                    <img
                      src={locationIcon}
                      alt="Address"
                      className="input-icon"
                    />
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter your address"
                      value={productData.address}
                      onChange={handleChange}
                    />
                  </div>
                )}
                {formErrors.location && (
                  <span className="error">{formErrors.location}</span>
                )}
                {formErrors.address && (
                  <span className="error">{formErrors.address}</span>
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
                {formErrors.quantity && (
                  <span className="error">{formErrors.quantity}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="productUri">Product URI *</label>
                <div className="input-wrapper">
                  <img src={linkIcon} alt="URI" className="input-icon" />
                  <input
                    type="url"
                    id="productURI"
                    placeholder="Enter product URI"
                    value={productData.productURI}
                    onChange={handleChange}
                    required
                  />
                </div>
                {formErrors.productURI && (
                  <span className="error">{formErrors.productURI}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="advert" className="location-label">
                  Enable Advert
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="advert"
                      checked={isAdvertEnabled}
                      onChange={() => setIsAdvertEnabled(!isAdvertEnabled)}
                    />
                    <span className="slider round"></span>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="btn-list-product"
                disabled={
                  isLoading || isPending || isConfirming || !isConnected
                }
              >
                {isLoading || isPending
                  ? "Submitting Transaction..."
                  : isConfirming
                  ? "Confirming Transaction..."
                  : isConfirmed && !isProductListed
                  ? "Waiting for Event..."
                  : "List Product"}
              </button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {!isConnected && (
              <div className="warning-message">
                Please connect your wallet to list a product.
              </div>
            )}
            {hash && (
              <div className="transaction-info">Transaction Hash: {hash}</div>
            )}
            {isConfirming && (
              <div className="transaction-status">
                Waiting for confirmation...
              </div>
            )}
            {isConfirmed && (
              <div className="transaction-status success">
                Transaction confirmed. Product listed successfully!
              </div>
            )}
            {isConfirmed && !isProductListed && (
              <div className="transaction-status">
                Transaction confirmed. Waiting for ProductListed event...
              </div>
            )}
            {isProductListed && (
              <div className="transaction-status success">
                Product listed successfully! Event received.
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

// sample data
// const [productData, setProductData] = useState({
//   name: "rust",
//   price: "5",
//   lat: "-10.8544921875",
//   long: "49.82380908513249",
//   quantity: "2",
//   productURI:
//     "https://github.com/dashingfon/dayonesDemo/blob/master/uri.json",
// });
