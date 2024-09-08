import React, { useState } from "react";
import "./AdvertsPage.css";
import ProductsNavbar from "./ProductsNavbar";
import { ShoppingCart, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdvertsPage = () => {
  const [showMyAdverts, setShowMyAdverts] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const adverts = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Smartphone",
      price: 5.99,
      category: "Electronics",
      impressions: 1,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Laptop",
      price: 9.99,
      category: "Electronics",
      impressions: 3,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Headphones",
      price: 1.99,
      category: "Electronics",
      impressions: 1.1,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Smartwatch",
      price: 2.99,
      category: "Electronics",
      impressions: 0.1,
    },
  ];

  const [earnings, setEarnings] = useState({
    month: 5.2,
    week: 1.8,
    year: 52.0,
    total: 100.0,
  });

  const [earningsTimeframe, setEarningsTimeframe] = useState("month");

  const handleWithdraw = () => {
    // Implement withdrawal logic here
    console.log("Withdrawing earnings...");
  };

  const handleStartCampaign = (id) => {
    // Implement start campaign logic here
    console.log(`Starting campaign for advert ${id}...`);
  };

  return (
    <div className="adverts-page">
      <ProductsNavbar />
      <div className="adverts-content">
        <section className="advert-controls">
          <div className="container">
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={showMyAdverts}
                  onChange={() => setShowMyAdverts(!showMyAdverts)}
                />
                <span className="slider round"></span>
              </label>
              <span>{showMyAdverts ? "My Adverts" : "Adverts"}</span>
            </div>
            <div className="advert-actions">
              <button className="btn-ver" onClick={() => navigate("/verify")}>
                Verify
              </button>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isSubscribed}
                  onChange={() => setIsSubscribed(!isSubscribed)}
                />
                <span className="slider round"></span>
              </label>
              <span>{isSubscribed ? "Subscribed" : "Unsubscribed"}</span>
            </div>
          </div>
        </section>
        {!showMyAdverts ? (
          <>
            <section className="advert-feeds">
              <div className="container">
                <h2>Your Feeds</h2>
                <div className="advert-list">
                  {adverts.map((advert) => (
                    <div key={advert.id} className="advert-card">
                      <img src={advert.image} alt={advert.title} />
                      <h3>{advert.title}</h3>
                      <p className="advert-category">{advert.category}</p>
                      <p className="advert-price">
                        {advert.price.toFixed(2)} DAY1
                      </p>
                      <button className="btn-add-to-cart">
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="earnings">
              <div className="container">
                <h2>Your Earnings</h2>
                <div className="earnings-info">
                  <div className="earnings-amount">
                    <h3>{earnings[earningsTimeframe].toFixed(2)} DAY1</h3>
                    <span>this {earningsTimeframe}</span>
                  </div>
                  <div className="earnings-timeframe">
                    <button
                      className={`btn-timeframe ${
                        earningsTimeframe === "month" ? "active" : ""
                      }`}
                      onClick={() => setEarningsTimeframe("month")}
                    >
                      Month
                    </button>
                    <button
                      className={`btn-timeframe ${
                        earningsTimeframe === "week" ? "active" : ""
                      }`}
                      onClick={() => setEarningsTimeframe("week")}
                    >
                      Week
                    </button>
                    <button
                      className={`btn-timeframe ${
                        earningsTimeframe === "year" ? "active" : ""
                      }`}
                      onClick={() => setEarningsTimeframe("year")}
                    >
                      Year
                    </button>
                    <button
                      className={`btn-timeframe ${
                        earningsTimeframe === "total" ? "active" : ""
                      }`}
                      onClick={() => setEarningsTimeframe("total")}
                    >
                      All Time
                    </button>
                  </div>
                  <button className="btn-withdraw" onClick={handleWithdraw}>
                    Withdraw
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="my-adverts">
            <div className="container">
              <table className="my-adverts-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Impressions</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {adverts.map((advert) => (
                    <tr key={advert.id}>
                      <td>{advert.title}</td>
                      <td>{advert.impressions}K</td>
                      <td>
                        <button
                          className="btn-start-campaign"
                          onClick={() => handleStartCampaign(advert.id)}
                        >
                          <Play size={16} />
                          Start
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdvertsPage;
