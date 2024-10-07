import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"
import About from '../../sections/About/About';
import Services from '../../sections/Services/Services';
// import Products from '../../sections/Products/Products';
import Footer from '../../components/Footer/Footer';
import CountUpBar from '../../components/CountUpBar/CountUpBar';

const LandingPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundImage: `url('https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg?t=st=1728327630~exp=1728331230~hmac=6c0c1398c6dc655b42b2f62765f33631cf6520bdd8c58895a3f12da9947784c3&w=1380')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.9", // Background opacity
          zIndex: "-1",
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
        fontWeight: "400.5"}}>Where Technology <br/> Meets <span className='blinking-text'>Buzz</span></div>
        <div>
        <div className='d-flex column-gap-3'>
  <Link to="/services" className="text-decoration-none text-inherit">
        <span className="bn3 mt-3">
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
