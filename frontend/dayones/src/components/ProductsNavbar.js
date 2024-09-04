import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsNavbar.css";
import logo from "./logo.png";
import carticon from "./cart-icon.png";
import profileicon from "./profile-icon.png";

const ProductsNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

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
            <img src={carticon} alt="Cart" />
          </div>
          <div className="profile-dropdown">
            <img
              src={profileicon}
              onClick={() => setShowDropdown(!showDropdown)}
              alt="Profile"
            />

            {showDropdown && (
              <div className="profile-content">
                <p className="user-name">Udeme Fon</p>
                <p className="user-email">ud**********@gmail.com</p>
                <button className="btn-connect-wallet">Connect Wallet</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProductsNavbar;
