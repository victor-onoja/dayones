import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { PrimaryButton, SecondaryButton } from "./buttons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };

    const handleSignupClick = () => {
      navigate('/signup');
    };
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
          <PrimaryButton children={"Login"} onClick={handleLoginClick}/>
          <SecondaryButton children={"Signup"} onClick={handleSignupClick}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
