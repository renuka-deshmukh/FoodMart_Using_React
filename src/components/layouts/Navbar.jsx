import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-lg bg-white shadow-sm ">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Left Section */}
        <div className="d-flex align-items-center">
          <img
            src="https://themewagon.github.io/FoodMart/images/logo.png"
            alt="FoodMart Logo"
            className="navbar-logo"
          />
         
        </div>

        {/* Center Section */}
        <div className="search-bar d-flex align-items-center me-2">
          <div className= "m-2">
            <select className="form-select category-select">
            <option>All Categories</option>
            <option>Fruits & Vegetables</option>
            <option>Beverages</option>
            <option>Snacks</option>
          </select>
          </div>

          <input
            type="text"
            className="form-control search-input"
            placeholder="Search for more than 20,000 products"
          />
          <button className="btn search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <div className="text-end me-4">
            <small className="text-muted d-block">For Support?</small>
            <span className="fw-bold text-dark">+980-34984089</span>
          </div>

          <FaUser className="icon mx-2" />
          <FaHeart className="icon mx-2" />
          <div className="cart-section ms-3">
            <span className="text-muted">Your Cart</span>
            <div className="fw-bold">$1290.00</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
