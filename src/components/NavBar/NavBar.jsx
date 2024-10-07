import React from 'react';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation(); // Get the current route

  return (
    <Navbar expand="lg" className="the-navbar" style={{ padding: "20px 5vw", zIndex: "1000" }}>
      <Navbar.Brand href="/">
        <img
          style={{ position: "relative", bottom: "2px" }}
          src={require("../../assets/buzzsols-logo.png")}
          width="60"
          alt="Buzz Solutions logo"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            as={Link}
            to="/"
            className={`px-3 ${location.pathname === '/' ? 'active' : ''}`}
          >
            <span>Home</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/services"
            className={`px-3 ${location.pathname === '/services' ? 'active' : ''}`}
          >
            <span>Services</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/book-an-appointment"
            className={`px-3 ${location.pathname === '/book-an-appointment' ? 'active' : ''}`}
          >
            <span>Book an Appointment</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className={`px-3 ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            <span>Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
