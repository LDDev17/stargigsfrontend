import React from 'react';
import { FooterLogo } from './FooterLogo'; // Import the FooterLogo component
// import './footer.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Footer: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  const handleBookingClick = () => {
    navigate('/add-performer'); // Navigate to the Add Performer page
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="rectangle.png" alt="Footer Background" className="footer-bg" />
        <div className="footer-overlay">
          <FooterLogo /> {/* Use the FooterLogo component */}
          <p className="footer-phone">
            <a href="tel:+1234567890" className="hover:text-yellow-400">+1 (234) 567-890</a>
          </p>
          <p className="footer-address">123 Market Street, City, Country</p>
          <p className="footer-copyright">© 2025 STAR GIGS. All rights reserved.</p>
          <nav className="footer-nav">
            <a href="/show-talent">Home</a> {/* Updated link for testing */}
            <a href="#about">About</a>
            <a href="#booking" onClick={handleBookingClick}>Booking</a> {/* Add onClick handler */}
            <a href="#contact" onClick={handleContactClick}>Contact</a> {/* Add onClick handler */}
            <a href="/show-talent1">Reviews</a> {/* Updated link for testing */}
            <a href="/talent-page-1">Talent Acts</a> {/* Updated link */}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
