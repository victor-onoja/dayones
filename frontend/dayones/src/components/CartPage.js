import React, { useState } from "react";
import "./CartPage.css";
import logo from "./logo.png";

const CartPage = () => {
  // Sample cart data. In a real app, this would come from state or context.
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Black dslr camera",
      price: 0.2,
      image:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Grey and green quadcopter drone",
      price: 0.1,
      image:
        "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const [quote, setQuote] = useState(null);

  const handleGetQuote = () => {
    // Simulate fetching a quote from an API
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const deliveryFee = 20; // Example delivery fee
    setQuote({
      totalPrice,
      deliveryFee,
    });
  };

  const handleBuy = () => {
    // Implement buy functionality
    alert("Proceeding to buy");
  };

  return (
    <div className="cart-page">
      <nav className="cart-navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Dayones Logo" />
            <span className="logo-text">dayones</span>
          </div>
          <span className="cart-text">Cart</span>
        </div>
      </nav>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.price} day1</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-get-quote" onClick={handleGetQuote}>
        Get Quote
      </button>

      {quote && (
        <div className="quote-details">
          <p>Total Price: {quote.totalPrice} day1</p>
          <p>Total Delivery Fee: {quote.deliveryFee} day1</p>
          <button className="btn-buy" onClick={handleBuy}>
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
