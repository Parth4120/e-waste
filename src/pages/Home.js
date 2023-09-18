import React from 'react'
import './Home.css';
import img from '../e-waste.png'
import About from './About';
import Services from './Services';
const Home = () => {
  return (
    <div className='main-container'>

    {/* <div className='container'> */}
      <div className='main-header' >
         
        <p>"Discover, Dispose, and Earn:
        <br />
       <span>Your Ultimate E-Waste Solution Hub!"</span>
       <br />
       <span className='home-heading'>Turn Your Old Gadgets into Green Rewards!</span> 
        </p>
      </div>

      <div>
        <About/>
      </div>
      <div>
        <Services/>
      </div>
    </div>
  )
}

export default Home
