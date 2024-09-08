import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import "./ProductsNavbar.css";
import logo from "./logo.png";
import carticon from "./cart-icon.png";
import profileicon from "./profile-icon.png";

const ProductsNavbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { address, isConnected } = useAccount();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <img src={logo} alt="Dayones Logo" />
          <span className="logo-text">DAYONES</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/deliveries">Deliveries</Link>
          </li>
          <li>
            <Link to="/adverts">Adverts</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <div>
            <img src={carticon} alt="Cart" onClick={() => navigate("/cart")} />
          </div>
          <div className="profile-dropdown">
            <img
              src={profileicon}
              onClick={() => setShowDropdown(!showDropdown)}
              alt="Profile"
            />
            {showDropdown && (
              <div className="profile-content">
                {isConnected ? (
                  <>
                    <p className="user-name">Connected</p>
                    <p className="user-email">
                      {address.slice(0, 6)}...{address.slice(-4)}
                    </p>
                  </>
                ) : (
                  <p className="user-name">Not Connected</p>
                )}
                <ConnectButton
                  accountStatus={{
                    smallScreen: "avatar",
                    largeScreen: "avatar",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProductsNavbar;
