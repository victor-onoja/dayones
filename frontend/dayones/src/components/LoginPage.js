import React from "react";
import "./LoginPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import ethereumicon from "./ethereum-icon.png";
import mailicon from "./mail-icon.png";
import lockicon from "./lock-icon.png";

const LoginPage = () => {
  return (
    <div className="login-page">
      <nav className="login-navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">dayones</span>
          </div>
          <span className="login-text">Login</span>
        </div>
      </nav>

      <main className="login-main">
        <div className="container login-content">
          <div className="login-image">
            <img src={boy} alt="Smiling youth" />
          </div>
          <div className="login-form">
            <button className="btn-ethereum">
              <img src={ethereumicon} alt="Ethereum Icon" />
              Sign in with Ethereum
            </button>

            <div className="login-divider">
              <span>or</span>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="email">Email address *</label>
                <div className="input-wrapper">
                  <img src={mailicon} alt="Email Icon" className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password </label>
                <div className="input-wrapper">
                  <img
                    src={lockicon}
                    alt="Password Icon"
                    className="input-icon"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-login">
                Login with password
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
