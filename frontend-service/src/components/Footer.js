// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-content">
//         <p>&copy; 2025 Your Store. All rights reserved.</p>
//         <ul>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><a href="#">Privacy Policy</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Store. All rights reserved.</p>

        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
