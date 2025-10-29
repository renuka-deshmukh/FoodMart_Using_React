import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section container my-5">
      <div className="row g-4 align-items-center">
        {/* LEFT MAIN BANNER */}
        <div className="col-lg-8">
          <div className="hero-main-banner p-5 rounded-4 position-relative">
            <div className="hero-text">
              <p className="text-warning fw-bold mb-2">100% Natural</p>
              <h1 className="fw-bold display-5">
                Fresh Smoothie & <br /> Summer Juice
              </h1>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Dignissim massa diam <br />elementum.
              </p>
              <button className="btn btn-outline-dark px-4 py-2 fw-semibold">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://themewagon.github.io/FoodMart/images/product-thumb-1.png"
              alt="Smoothie Bottle"
              className="hero-bottle-img"
            />
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          <div className="hero-side-card p-4 rounded-4 d-flex justify-content-between align-items-center bg-light-green">
            <div>
              <p className="mb-1 text-dark">20% Off</p>
              <h5 className="fw-bold mb-1">Fruits & Vegetables</h5>
              <p className="text-muted small mb-0">Shop Collection →</p>
            </div>
            <img
              src="https://themewagon.github.io/FoodMart/images/banner-thumb-1.png"
              alt="Fruits"
              className="side-img"
            />
          </div>

          <div className="hero-side-card p-4 rounded-4 d-flex justify-content-between align-items-center bg-light-pink">
            <div>
              <p className="mb-1 text-dark">15% Off</p>
              <h5 className="fw-bold mb-1">Baked Products</h5>
              <p className="text-muted small mb-0">Shop Collection →</p>
            </div>
            <img
              src="https://themewagon.github.io/FoodMart/images/banner-thumb-2.png"
              alt="Bread"
              className="side-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
