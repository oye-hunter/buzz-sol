import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-container w-full flex items-center md:justify-between justify-center md:my-28 my-14 flex-col md:flex-row 2xl:gap-x-48 lg:gap-x-20 sm:gap-x-10 gap-x-0 gap-y-10'
    style={{
        padding: "0 5vw",
    }}
  >
    <div>
        <h3 className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-3'>At <span style={{color: "#c72f48"}}>BUZZ SOLUTIONS, </span></h3>
       <p className='lg:text-lg text-sm font-light'>We fuse innovation with energy, delivering cutting-edge technology that creates a buzz in the digital world. Our solutions are designed to power businesses forward, transforming ideas into impactful realities. 
       </p> 
    </div>
    <img className='md:h-7/10 md:w-2/5'
     src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    style={{objectFit: "cover"}} alt="" />
</div>
  )
}

export default About