import React from 'react';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    setPlacement(newPlacement);
  };

  const handleMouseEnterPopper = () => {
    setOpen(true);  // Ensure the popper remains open when hovered over
  };

  const handleMouseLeaveBoth = () => {
    setOpen(false);  // Close the popper only when leaving both Nav.Link and Popper
  };

  return (
    <Navbar expand="lg" className="the-navbar" style={{ padding: "20px 5vw", zIndex: "1000" }}>
      <Navbar.Brand href="#home">
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
          <Box sx={{ width: 500 }}>
            <Popper
              sx={{ zIndex: 1200 }}
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
              onMouseEnter={handleMouseEnterPopper}  // Keep popper open when hovering over it
              onMouseLeave={handleMouseLeaveBoth}  // Close when mouse leaves both popper and nav link
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <div className=' flex flex-col'>
                        <p>Full Stack Development</p>
                        <p>Mobile App Development</p>
                        <p>GHL Automation</p>
                        <p>Video Editing</p>
                        <p>Branding</p>
                    </div>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </Box>
          <Nav.Link href="#about" className="px-3"><span>About</span></Nav.Link>
          <Nav.Link
            href="#service"
            className="px-3"
            onMouseEnter={handleClick('bottom-end')}
            onMouseLeave={handleMouseLeaveBoth}  // Close popper only when leaving both areas
          >
            <span>Services</span>
          </Nav.Link>
          <Nav.Link href="#products" className="px-3"><span>Products</span></Nav.Link>
          <Nav.Link href="#careers" className="px-3"><span>Careers</span></Nav.Link>
          <Nav.Link href="#contact" className="px-3"><span>Contact</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
