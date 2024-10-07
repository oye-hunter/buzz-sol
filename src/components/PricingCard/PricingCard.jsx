import React from 'react';
import './PricingCard.css'

const PricingCard = () => {
  // projectsData with satisfactionRate and no description or status
  const pricingCardData = [
    {
      title: "Full Stack Development",
      projectsCompleted: 35,
      satisfactionRate: "98%"
    },
    {
      title: "Mobile App Development",
      projectsCompleted: 22,
      satisfactionRate: "96%"
    },
    {
      title: "Machine Learning",
      projectsCompleted: 10,
      satisfactionRate: "94%"
    },
    {
      title: "GHL Automation",
      projectsCompleted: 12,
      satisfactionRate: "95%"
    },
    {
      title: "Video Editing",
      projectsCompleted: 45,
      satisfactionRate: "97%"
    },
    {
      title: "Graphic Designing",
      projectsCompleted: 30,
      satisfactionRate: "99%"
    }
  ];

  return (
    <div className="pricing-card-container">
      <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-3">
        Our <span style={{ color: "rgb(199,47,72)" }}>Services</span>
      </h3>
      <div className="products-card-container">
        {pricingCardData.map((project, index) => (
          <div key={index} className="products-card text-center sm:text-xl text-lg flex flex-col justify-center items-center">
            <h5>{project.title}</h5>
            <p className="mt-2 text-center font-light sm:text-sm text-xs">Projects Completed: {project.projectsCompleted}</p>
            <p className="mt-2 text-center font-light sm:text-sm text-xs">Satisfaction Rate: {project.satisfactionRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
