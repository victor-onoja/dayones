import React from "react";
import "./ProductsFooter.css";
import footerlogo from "./footer-logo.png";
import facebookicon from "./facebook-icon.png";
import twittericon from "./twitter-icon.png";
import instagramicon from "./instagram-icon.png";
import { X } from "lucide-react";

const ProductsFooter = ({ onDismiss }) => {
  return (
    <footer className="footer">
      <button className="dismiss-button" onClick={onDismiss}>
        <X size={24} />
      </button>
      <div className="container">
        <div className="newsletter">
          <h3>Sign up for our newsletter</h3>
          <p>Stay up to date with latest news, announcements, and articles</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="footer-content">
          <div className="footer-logo">
            <img src={footerlogo} alt="Dayones Logo" />
            <span>dayones</span>
          </div>
          <p className="copyright">
            © 2024 Dayones Technologies. All rights reserved.
          </p>
          <div className="social-icons">
            {/* Add social media icons here */}
            <a href="#" className="social-icon">
              <img src={facebookicon} alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src={twittericon} alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src={instagramicon} alt="Instagram" />
            </a>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Developer</h4>
              <ul>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProductsFooter;
