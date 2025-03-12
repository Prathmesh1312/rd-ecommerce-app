import React from 'react';
import '../../src/App.css'

// Components
import HeroBanner from '../components/Herobanner.js';
import NewProducts from '../components/NewProducts.js';
import Testimonials from '../components/Testimonials.js';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <NewProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
