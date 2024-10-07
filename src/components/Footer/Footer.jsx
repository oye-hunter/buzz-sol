import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="lp-footer p-14 mt-5">
      <div className="footer-den-info">
        <img src={require("../../assets/buzzsols-logo.png")} className="w-16 mb-2" alt="" />
        <p className="w-full">
          Where technology meet buzz...
        </p>
      </div>
      <div className="footer-links">
        <h5>Links</h5>
        <a href="/" className="pt-1">Home</a>
        <a href="/" className="pt-1">Services</a>
        <a href="/" className="pt-1">Book An Appointment</a>
        <a href="/" className="pt-1">Contact</a>
      </div>
      <div className="footer-follow-us">
        <h5>Follow Us</h5>
        <div className="footer-follow-us-logos">
        </div>
      </div>
    </div>
  );
};

export default Footer;
