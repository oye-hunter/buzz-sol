import React from "react";
import "./Services.css";
import PricingCard from "../../sections/PricingSection/PricingSection";
import Footer from '../../components/Footer/Footer';
import ProcessSection from "../../sections/Process/ProcessSection";
import AccelerateSection from "../../sections/Accelerate/AccelerateSection";
const Services = () => {
  return (<>
  
    <div className="services-container">
        <PricingCard/>
    </div>
    <ProcessSection/>
    <AccelerateSection/>
      
    <Footer/>
  </>
  );
};

export default Services;
