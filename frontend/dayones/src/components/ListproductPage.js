import React, { useState, useEffect } from "react";
import Web3 from "web3";
import DAY1_ABI from "../constants/abi";
import "./ListProductPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import person from "./person-icon.png";
import priceIcon from "./price-icon.png";
import locationIcon from "./location-icon.png";
import qtyIcon from "./qty-icon.png";
import linkIcon from "./link-icon.png";

const ListProductPage = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
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
  const [contractAddress, setContractAddress] = useState(
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );
  const [networkId, setNetworkId] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        try {
          await window.ethereum.enable();
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          const actualABI = DAY1_ABI[0].abi;
          console.log("Actual ABI:", actualABI);

          if (!Array.isArray(actualABI) || actualABI.length === 0) {
            throw new Error("ABI is not properly defined or imported");
          }

          const netId = await web3Instance.eth.net.getId();
          setNetworkId(netId);

          if (netId !== 31337) {
            setError("Please connect to your local network in MetaMask");
            return;
          }

          const contractInstance = new web3Instance.eth.Contract(
            actualABI,
            contractAddress
          );
          if (!contractInstance || !contractInstance.methods) {
            throw new Error(
              "Contract instance or methods not properly initialized"
            );
          }
          setContract(contractInstance);
          console.log("Contract Instance:", contractInstance);
          console.log(
            "Available contract methods:",
            Object.keys(contractInstance.methods)
          );

          // Test the listProduct method
          if (contractInstance.methods.listProduct) {
            console.log("listProduct method exists");
          } else {
            console.log("listProduct method does not exist");
          }
        } catch (error) {
          console.error("Initialization error:", error);
        }
      } else {
        console.error(
          "Non-Ethereum browser detected. Please install MetaMask!"
        );
      }
    };

    initWeb3();
    // Listen for network changes
    if (window.ethereum) {
      window.ethereum.on("networkChanged", (newNetworkId) => {
        setNetworkId(parseInt(newNetworkId));
      });
    }

    return () => {
      // Clean up listener
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener("networkChanged", setNetworkId);
      }
    };
  }, [contractAddress]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
  };

  const handleListProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Check network before proceeding
    if (networkId !== 31337) {
      setError("Please connect to your local network in MetaMask");
      setIsLoading(false);
      return;
    }

    if (!web3 || !contract) {
      setError(
        "Web3 or contract not initialized. Please check your MetaMask connection."
      );
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
      const result = await contract.methods
        .listProduct({
          name,
          price: web3.utils.toWei(price, "ether"),
          lat: latBigInt,
          long: longBigInt,
          quantity,
          productURI,
        })
        .send({ from: account });

      console.log("Transaction result:", result);
      alert("Product listed successfully!");
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
            <img src={boy} alt="Signup" />
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
              {networkId !== 31337 && (
                <div className="error-message">
                  Please connect to your local network in MetaMask
                </div>
              )}
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
                disabled={isLoading}
              >
                {isLoading ? "Listing Product..." : "List Product"}
              </button>
            </form>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListProductPage;
