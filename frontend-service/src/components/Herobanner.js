import React from 'react';
import './HeroBanner.css';
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const Navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for amazing products</p>
        <button className="shop-now-btn" onClick={()=> Navigate(`/c/Men%20T-shirts`)}>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroBanner;
