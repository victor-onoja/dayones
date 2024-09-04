import React, { useState } from "react";
import "./OrdersPage.css";
import ProductsNavbar from "./ProductsNavbar";
import { Search, ChevronDown } from "lucide-react";

const OrdersPage = () => {
  const [showMyOrders, setShowMyOrders] = useState(false);
  const [carrierInput, setCarrierInput] = useState("");

  const orders = [
    {
      id: 1,
      date: "2024-09-01",
      productName: "Smartphone",
      amount: 5.0,
      qty: 1,
      carrier: "0x1234...5678",
      status: "bought",
    },
    {
      id: 2,
      date: "2024-09-02",
      productName: "Laptop",
      amount: 1.99,
      qty: 1,
      carrier: "0x8765...4321",
      status: "in-transit",
    },
    {
      id: 3,
      date: "2024-09-03",
      productName: "Headphones",
      amount: 9.99,
      qty: 2,
      carrier: "0x2468...1357",
      status: "delivered",
    },
    {
      id: 4,
      date: "2024-09-04",
      productName: "Smartwatch",
      amount: 2.99,
      qty: 1,
      carrier: "0x1357...2468",
      status: "cancelled",
    },
  ];

  const handleStatusUpdate = (orderId, newStatus) => {
    // Implement status update logic here
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  const handleCarrierAssign = (orderId) => {
    // Logic to assign carrier
    console.log(`Assigning carrier ${carrierInput} to order ${orderId}`);
    setCarrierInput(""); // Clear input after assignment
  };

  return (
    <div className="orders-page">
      <ProductsNavbar />
      <div className="orders-content">
        <section className="order-controls">
          <div className="container">
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={showMyOrders}
                  onChange={() => setShowMyOrders(!showMyOrders)}
                />
                <span className="slider round"></span>
              </label>
              <span>{showMyOrders ? "My Orders" : " Orders"}</span>
            </div>
            <div className="search-filter">
              <div className="search-container">
                <Search size={20} />
                <input type="text" placeholder="Search orders" />
              </div>
            </div>
          </div>
        </section>
        <section className="filter-options">
          <div className="container">
            <div className="filter-group">
              <label>Amount:</label>
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" />
            </div>
            <div className="filter-group">
              <label>Date:</label>
              <input type="date" />
              <input type="date" />
            </div>
            <div className="filter-group">
              <label>Status:</label>
              <select>
                <option value="">All</option>
                <option value="bought">Bought</option>
                <option value="in transit">In Transit</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <button className="btn-apply-filters">Apply Filters</button>
          </div>
        </section>
        <section className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Product Name</th>
                <th>Amount</th>
                <th>Qty</th>
                <th>Carrier</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>{order.productName}</td>
                  <td>{order.amount.toFixed(2)} DAY1</td>
                  <td>{order.qty}</td>
                  <td>{order.carrier}</td>
                  <td>
                    <span className={`status-badge ${order.status}`}>
                      {order.status}
                    </span>
                    {/* {(order.status === "bought" ||
                      order.status === "in-transit") && (
                      <div className="status-dropdown">
                        <ChevronDown size={16} />
                        <div className="dropdown-content">
                          {order.status === "bought" && (
                            <button
                              onClick={() =>
                                handleStatusUpdate(order.id, "cancelled")
                              }
                            >
                              cancel
                            </button>
                          )}
                          {order.status === "in-transit" && (
                            <button
                              onClick={() =>
                                handleStatusUpdate(order.id, "delivered")
                              }
                            >
                              delivered
                            </button>
                          )}
                        </div>
                      </div>
                    )} */}
                    {showMyOrders ? (
                      order.status === "bought" ? (
                        <div className="status-input">
                          <input
                            type="text"
                            placeholder="Enter carrier"
                            value={carrierInput}
                            onChange={(e) => setCarrierInput(e.target.value)}
                          />
                          <button onClick={() => handleCarrierAssign(order.id)}>
                            Assign Carrier
                          </button>
                        </div>
                      ) : order.status === "in-transit" ? null : null
                    ) : (
                      (order.status === "bought" ||
                        order.status === "in-transit") && (
                        <div className="status-dropdown">
                          <ChevronDown size={16} />
                          <div className="dropdown-content">
                            {order.status === "bought" && (
                              <button
                                onClick={() =>
                                  handleStatusUpdate(order.id, "cancelled")
                                }
                              >
                                cancel
                              </button>
                            )}
                            {order.status === "in-transit" && (
                              <button
                                onClick={() =>
                                  handleStatusUpdate(order.id, "delivered")
                                }
                              >
                                delivered
                              </button>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default OrdersPage;
