import React from "react";
import "./StartAdvertPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import priceicon from "./price-icon.png";
import impressionicon from "./qty-icon.png";
import targeticon from "./location-icon.png";
import ageicon from "./person-icon.png";
import locationicon from "./location-icon.png";
import interesticon from "./person-icon.png";

const StartAdvertPage = () => {
  return (
    <div className="start-advert-page">
      <nav className="start-advert-navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">dayones</span>
          </div>
          <span className="start-advert-text">Start Advert Campaign</span>
        </div>
      </nav>

      <main className="start-advert-main">
        <div className="container start-advert-content">
          <div className="start-advert-image">
            <img src={boy} alt="Start Advert" />
          </div>
          <div className="start-advert-form">
            <form>
              <div className="form-group">
                <label htmlFor="pricePerImpression">
                  Price per Impression (DAY1) *
                </label>
                <div className="input-wrapper">
                  <img src={priceicon} alt="Price" className="input-icon" />
                  <input
                    type="number"
                    id="pricePerImpression"
                    placeholder="Enter price per impression"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="totalImpressions">Total Impressions *</label>
                <div className="input-wrapper">
                  <img
                    src={impressionicon}
                    alt="Impressions"
                    className="input-icon"
                  />
                  <input
                    type="number"
                    id="totalImpressions"
                    placeholder="Enter total impressions"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="targetAudience">Target Audience *</label>
                <div className="input-wrapper">
                  <img
                    src={targeticon}
                    alt="Target Audience"
                    className="input-icon"
                  />
                  <select id="targetAudience" required>
                    <option value="">Select target audience</option>
                    <option value="general">General</option>
                    <option value="specific">Specific</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="ageRange">Age Range *</label>
                <div className="input-wrapper">
                  <img src={ageicon} alt="Age Range" className="input-icon" />
                  <input
                    type="text"
                    id="ageRange"
                    placeholder="e.g., 18-35"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <div className="input-wrapper">
                  <img
                    src={locationicon}
                    alt="Location"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter target location"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interests">Interests *</label>
                <div className="input-wrapper">
                  <img
                    src={interesticon}
                    alt="Interests"
                    className="input-icon"
                  />
                  <input
                    type="text"
                    id="interests"
                    placeholder="Enter target interests"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-start-advert">
                Start Campaign
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartAdvertPage;
