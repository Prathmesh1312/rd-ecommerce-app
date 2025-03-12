import React from 'react';
import './NewProducts.css';

const NewProducts = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$600', image: 'https://storage.googleapis.com/rd-ecommerce-app/t_black.jpg' },
    { id: 2, name: 'Product 2', price: '$490', image: 'https://storage.googleapis.com/rd-ecommerce-app/s_red.jpg' },
    { id: 3, name: 'Product 3', price: '$200', image: 'https://storage.googleapis.com/rd-ecommerce-app/g_red.jpg' },
    { id: 4, name: 'Product 4', price: '$520', image: 'https://storage.googleapis.com/rd-ecommerce-app/k_green.jpg' },
  ];

  return (
    <>
    <div className="new-products">
      <h2>New Arrivals</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NewProducts;
