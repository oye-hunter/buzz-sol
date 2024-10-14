import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css";
import About from '../../sections/About/About';
import Services from '../../sections/OurServices/OurServices';
// import Products from '../../sections/Products/Products';
import Footer from '../../components/Footer/Footer';
import CountUpBar from '../../components/CountUpBar/CountUpBar';
/* App.css */



const LandingPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        scrollBehavior: "smooth",
        
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${require('../../assets/background.gif')})`, // Updated to local GIF
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "1", // Background opacity
          zIndex: "1",
        }}
      ></div>
      
      <div
        className='text-center'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%", // Ensures the text is vertically centered
        }}
      >
        <div className='hero-text 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl pt-8'
         style={{
          zIndex: "1", // Text should be above the background
          color: "rgb(255, 255, 250)",
          textShadow: "3px 3px 10px black",
          lineHeight: "80px",
          fontWeight: "400.5",
          fontFamily: 'Poppins, sans-serif',

        }}>
          Where Technology <br/> Meets <span className='blinking-text'>Buzz</span>
        </div>
        <div style={{zIndex: "1"}}>
          <div className='d-flex column-gap-3' style={{zIndex: "1"}}>
            <Link to="/services" className="text-decoration-none text-inherit">
              <span className="bn4 mt-3">
                Our Services
              </span>
            </Link>
            <Link to="/book-an-appointment" className="text-decoration-none text-inherit">
              <span className="bn3 mt-3">
                Let's Talk
              </span>
            </Link>
          </div>
        </div>
      </div>
      <About/> 
      <Services/> 
      {/* <Products/> */}
      <CountUpBar/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
