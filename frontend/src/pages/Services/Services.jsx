import React from "react";
import "./Services.css";
import PricingCard from "../../sections/PricingSection/PricingSection";
import Footer from '../../components/Footer/Footer';
const Services = () => {
  return (<>
    <div className="services-container">
        <PricingCard/>
    </div>
        <Footer/>
  </>
  );
};

export default Services;
