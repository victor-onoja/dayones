import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
// import { Chain } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
import ProductPage from "./components/ProductPage";

const localChain = {
  id: 31337,
  name: "Localhost",
  network: "localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Dayones",
    symbol: "DAY1",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] },
  },
};

const web3Config = getDefaultConfig({
  appName: "Dayones",
  projectId: "d709a85b4762b0a7f7da0090486cb9eb",
  chains: [localChain],
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={web3Config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
