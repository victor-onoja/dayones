import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <img src={logo} alt="Dayones Logo" />
          <span className="logo-text">dayones</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
          <li>
            <a href="#deliveries">Deliveries</a>
          </li>
          <li>
            <a href="#adverts">Adverts</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
