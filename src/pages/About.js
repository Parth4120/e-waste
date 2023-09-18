import React from 'react'
import img from '../e-waste.png'
import "./About.css"
const About = () => {
  return (
    // <div className='about-container'>
    //   <div className='about-img'>
    //     <img src={img} alt="" height="150px" width="300px"/>
    //   </div>
    //   <div className='about-content'>
    //     <h1>About E Waste</h1>
    //     <p>E-waste management is necessary due to several critical reasons. Firstly, electronic waste contains hazardous materials like lead, mercury, and cadmium, which can harm the environment and human health. Additionally, it is essential for regulatory compliance as many countries have laws governing the proper disposal of e-waste. Lastly, it supports sustainable practices by extending the lifespan of electronics through refurbishment and reducing the environmental footprint of these devices.</p>
    //   </div>
    // </div>

    // part-2
    
        <div className='about-container'>
        <div className='about-heading'>
            <h1>Welcome to GoGreen</h1>
            <div className='about-heading-1'>
            <span>Lorem ipsum dolor sit.</span>
            </div>
            
        </div>

            <div className='about-content-main'>
            
            <div className='about-content-main-1'>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis assumenda, nostrum est labore voluptatem enim!</span>
            </div>
                <div className='about-content-main-2'>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, porro odit.</span>
                </div>
                
                <div className='about-content-main-3'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                </div>
                
            
            </div>
            
        </div>
    
  )
}

export default About
