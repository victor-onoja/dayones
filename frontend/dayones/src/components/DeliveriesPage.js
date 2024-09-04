import React from "react";
import "./DeliveriesPage.css";
import ProductsNavbar from "./ProductsNavbar";
import { Search, ChevronDown } from "lucide-react";

const DeliveriesPage = () => {
  const orders = [
    {
      id: 1,
      date: "2024-09-01",
      productName: "Smartphone",
      amount: 5.0,
      qty: 1,
      status: "assigned",
    },
    {
      id: 2,
      date: "2024-09-02",
      productName: "Laptop",
      amount: 1.99,
      qty: 1,
      status: "in-transit",
    },
    {
      id: 3,
      date: "2024-09-03",
      productName: "Headphones",
      amount: 9.99,
      qty: 2,
      status: "delivered",
    },
    {
      id: 4,
      date: "2024-09-04",
      productName: "Smartwatch",
      amount: 2.99,
      qty: 1,
      status: "cancelled",
    },
  ];

  const handleStatusUpdate = (orderId, newStatus) => {
    // Implement status update logic here
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="orders-page">
      <ProductsNavbar />
      <div className="orders-content">
        <section className="order-controls">
          <div className="container">
            <div className="toggle-container">Deliveries</div>
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
                <option value="assigned">Assigned</option>
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
                  <td>
                    <span className={`status-badge ${order.status}`}>
                      {order.status}
                    </span>
                    {(order.status === "assigned" ||
                      order.status === "in-transit") && (
                      <div className="status-dropdown">
                        <ChevronDown size={16} />
                        <div className="dropdown-content">
                          {order.status === "assigned" && (
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

export default DeliveriesPage;
