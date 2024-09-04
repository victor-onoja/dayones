import React from "react";
import "./VerifyPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import personicon from "./person-icon.png";
import homeicon from "./location-icon.png";
import idicon from "./link-icon.png";
import workicon from "./qty-icon.png";
import ringicon from "./person-icon.png";
import gendericon from "./person-icon.png";
import hobbiesicon from "./person-icon.png";
import incomeicon from "./price-icon.png";

const VerifyPage = () => {
  return (
    <div className="verify-page">
      <nav className="verify-navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">dayones</span>
          </div>
          <span className="verify-text">Verify Information</span>
        </div>
      </nav>

      <main className="verify-main">
        <div className="container verify-content">
          <div className="verify-image">
            <img src={boy} alt="Verify" />
          </div>
          <div className="verify-form">
            <form>
              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <div className="input-wrapper">
                  <img src={personicon} alt="Age" className="input-icon" />
                  <input
                    type="number"
                    id="age"
                    placeholder="Enter your age"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <div className="input-wrapper">
                  <img src={homeicon} alt="Address" className="input-icon" />
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="idNumber">Identification Number *</label>
                <div className="input-wrapper">
                  <img src={idicon} alt="ID Number" className="input-icon" />
                  <input
                    type="text"
                    id="idNumber"
                    placeholder="Enter your ID number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="employmentStatus">Employment Status *</label>
                <div className="input-wrapper">
                  <img
                    src={workicon}
                    alt="Employment Status"
                    className="input-icon"
                  />
                  <select id="employmentStatus" required>
                    <option value="">Select your employment status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="marriageStatus">Marriage Status *</label>
                <div className="input-wrapper">
                  <img
                    src={ringicon}
                    alt="Marriage Status"
                    className="input-icon"
                  />
                  <select id="marriageStatus" required>
                    <option value="">Select your marriage status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="sex">Sex *</label>
                <div className="input-wrapper">
                  <img src={gendericon} alt="Sex" className="input-icon" />
                  <select id="sex" required>
                    <option value="">Select your sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="hobbies">Hobbies *</label>
                <div className="input-wrapper">
                  <img src={hobbiesicon} alt="Hobbies" className="input-icon" />
                  <input
                    type="text"
                    id="hobbies"
                    placeholder="Enter your hobbies"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="incomeLevel">Income Level *</label>
                <div className="input-wrapper">
                  <img
                    src={incomeicon}
                    alt="Income Level"
                    className="input-icon"
                  />
                  <input
                    type="number"
                    id="incomeLevel"
                    placeholder="Enter your income level"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-verify">
                Submit Information
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifyPage;
