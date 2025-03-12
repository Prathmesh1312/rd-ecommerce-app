import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for amazing products</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroBanner;
