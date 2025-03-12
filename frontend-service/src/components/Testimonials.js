import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = 
  [
    { id: 1, name: 'John Doe', review: 'Amazing products! Fast shipping.' },
    { id: 2, name: 'Jane Smith', review: 'I love the customer service. Highly recommend!' },
    { id: 3, name: 'Alice Brown', review: 'Great quality and price.' },
    { id: 4, name: 'Bob White', review: 'Fast delivery and great packaging. Will buy again!' },
    { id: 5, name: 'Sara Green', review: 'Super satisfied with my purchase. Everything was perfect!' },
    { id: 6, name: 'Mike Johnson', review: 'Good value for the money. Will definitely shop here again.' },
    { id: 7, name: 'Emily Clark', review: 'The product exceeded my expectations. Highly recommended!' },
    { id: 8, name: 'Tom Davis', review: 'Very efficient service, and the item arrived quickly.' },
    { id: 9, name: 'Olivia Turner', review: 'Excellent quality and quick shipping. Love it!' },
    { id: 10, name: 'David Lewis', review: 'Great experience. Will be coming back for more.' }
  ]
  

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <p>"{review.review}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
