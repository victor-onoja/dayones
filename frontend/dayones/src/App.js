import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProductsPage from "./components/ProductsPage";
import ListProductPage from "./components/ListproductPage";
import OrdersPage from "./components/OrdersPage";
import DeliveriesPage from "./components/DeliveriesPage";
import AdvertsPage from "./components/AdvertsPage";
import VerifyPage from "./components/VerifyPage";
import CartPage from "./components/CartPage";
import StartAdvertPage from "./components/StartAdvertPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/listproducts" element={<ListProductPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/deliveries" element={<DeliveriesPage />} />
          <Route path="/adverts" element={<AdvertsPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/startadvert" element={<StartAdvertPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
