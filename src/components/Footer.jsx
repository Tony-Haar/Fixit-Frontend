import React from 'react'


const Footer = () => {
  return (
    <div>
      <footer className="footer container d-flex justify-content-between align-items-center">
        <div className="footer-link-item-container d-flex justify-content-between align-items-center">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Terms Of Services</a>
          <a href="">Privacy Policy</a>
          <a href="">Help & Support</a>
        </div>
        <h3>&copy; FIXit, ALL RIGHTS RESERVED</h3>
        <hr />
      </footer>
    </div>
  );
}

export default Footer