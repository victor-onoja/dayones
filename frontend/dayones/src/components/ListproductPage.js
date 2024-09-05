import React, { useState } from "react";
import "./ListProductPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import person from "./person-icon.png";
import priceIcon from "./price-icon.png";
import locationIcon from "./location-icon.png";
import qtyIcon from "./qty-icon.png";
import linkIcon from "./link-icon.png";

const ListProductPage = () => {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isAdvertEnabled, setIsAdvertEnabled] = useState(true);

  return (
    <div className='list-product-page'>
      <nav className='list-product-navbar'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='Dayones Logo' />
            <span className='logo-text'>dayones</span>
          </div>
          <span className='list-product-text'>List Product</span>
        </div>
      </nav>

      <main className='list-product-main'>
        <div className='container list-product-content'>
          <div className='signup-image'>
            <img src={boy} alt='Signup' className='rounded-3xl' />
          </div>
          <div className='list-product-form'>
            <form>
              <div className='form-group'>
                <label htmlFor='productName'>Product Name *</label>
                <div className='input-wrapper'>
                  <img src={person} alt='Product' className='input-icon' />
                  <input
                    type='text'
                    id='productName'
                    placeholder='Enter product name'
                    required
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='price'>Price *</label>
                <div className='input-wrapper'>
                  <img src={priceIcon} alt='Price' className='input-icon' />
                  <input
                    type='number'
                    id='price'
                    placeholder='Enter price'
                    step='0.01'
                    required
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='location' className='location-label'>
                  Turn on Location *
                  <div className='toggle-switch'>
                    <input
                      type='checkbox'
                      id='location'
                      checked={!isLocationEnabled}
                      onChange={() => setIsLocationEnabled(!isLocationEnabled)}
                    />
                    <span className='slider round'></span>
                  </div>
                </label>
                {isLocationEnabled && (
                  <div className='input-wrapper'>
                    <img
                      src={locationIcon}
                      alt='Location'
                      className='input-icon'
                    />
                    <input
                      type='text'
                      id='location'
                      placeholder='Enter location'
                    />
                  </div>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='quantity'>Quantity *</label>
                <div className='input-wrapper'>
                  <img src={qtyIcon} alt='Quantity' className='input-icon' />
                  <input
                    type='number'
                    id='quantity'
                    placeholder='Enter quantity'
                    min='1'
                    required
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='productUri'>Product URI *</label>
                <div className='input-wrapper'>
                  <img src={linkIcon} alt='URI' className='input-icon' />
                  <input
                    type='url'
                    id='productUri'
                    placeholder='Enter product URI'
                    required
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='advert' className='location-label'>
                  Enable Advert-
                  <div className='toggle-switch'>
                    <input
                      type='checkbox'
                      id='advert'
                      checked={!isAdvertEnabled}
                      onChange={() => setIsAdvertEnabled(!isAdvertEnabled)}
                    />
                    <span className='slider round'></span>
                  </div>
                </label>
              </div>
              {/* <div className="w-full bg-purple-400">
                <button type='submit' className='btn-list-product'>
                  List Product
                </button>
              </div> */}
              <div className='w-full bg-green-400'>
                <button
                  type='submit'
                  className='w-full py-2 bg-green-800 text-white rounded-md green:bg-purple-700 transition duration-300'
                >
                  List Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListProductPage;
