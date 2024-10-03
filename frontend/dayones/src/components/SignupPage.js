import React from "react";
import "./SignupPage.css";
import ethereumicon from "./ethereum-icon.png";
import logo from "./logo.png";
import boy from "./boy.png";
import mailicon from "./mail-icon.png";
import lockicon from "./lock-icon.png";
import personicon from "./person-icon.png";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="signup-page">
      <nav className="signup-navbar">
        <div className="container">
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">DAYONES</span>
          </div>
          <span className="signup-text">Sign Up</span>
        </div>
      </nav>

      <main className="signup-main">
        <div className="container signup-content">
          <div className="signup-image">
            <img src={boy} alt="Signup" className="rounded-3xl" />
          </div>
          <div className="signup-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>

                  <div className="input-wrapper">
                    <img
                      src={personicon}
                      alt="Password"
                      className="input-icon"
                    />
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <div className="input-wrapper">
                    <img
                      src={personicon}
                      alt="Password"
                      className="input-icon"
                    />
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address *</label>
                <div className="input-wrapper">
                  <img src={mailicon} alt="Email" className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <div className="input-wrapper">
                  <img src={lockicon} alt="Password" className="input-icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <div className="input-wrapper">
                  <img
                    src={lockicon}
                    alt="Confirm Password"
                    className="input-icon"
                  />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <button type="button" className="btn-connect-wallet">
                <img src={ethereumicon} alt="Wallet" />
                Connect Wallet *
              </button>

              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </form>
            <footer className="text-center py-4 mt-14 text-gree-800">
              <p>© Dayones Technologies. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
