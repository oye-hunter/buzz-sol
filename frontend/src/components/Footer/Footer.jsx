import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="lp-footer p-14">
      <div className="footer-den-info">
        <img src={require("../../assets/buzzsols-logo-white.png")} className="w-24 mb-2" alt="" />
        {/* <h2 className="text-2xl"><span style={{color: "rgb(199, 47, 72)"}}>Buzz</span> Solutions</h2> */}
        <p className="w-full mt-2">
        Where technology meets <span style={{color: "rgb(199, 47, 72)"}}>buzz</span>
        </p>
      </div>
      <div className="footer-links">
        <h5 className="font-medium mb-2" style={{color: "rgb(199, 47, 72)"}}>Quick Links</h5>
        <Link to="/" className="pt-1">Home</Link>
        <Link to="/services" className="pt-1">Services</Link>
        <Link to="/book-an-appointment" className="pt-1">Book An Appointment</Link>
        <Link to="/contact-us" className="pt-1">Contact Us</Link>
      </div>
      <div className="footer-follow-us">
        <h5 className="font-medium mb-2" style={{color: "rgb(199, 47, 72)"}}>Follow Us</h5>
        {/* <div className="footer-follow-us-logos"> */}
        <div>
        <div className='my-2 mt-3 text-sm'>
        <i class="fa-solid fa-envelope mr-1" style={{color: "rgb(199, 47, 72)"}}></i> buzzsols1122@gmail.com
        </div>
        <div className='my-2 text-sm'>
        <i class="fa-solid fa-phone mr-1" style={{color: "rgb(199, 47, 72)"}}></i> +92 321 5211814
        </div>
        <a style={{color:"white", fontSize: "inherit"}} href="https://www.linkedin.com/company/buzz-sol/"><div className='my-2 text-sm'>
        <i class="fa-brands fa-linkedin mr-1" style={{color: "rgb(199, 47, 72)"}}></i> Buzz Solutions
      </div></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
