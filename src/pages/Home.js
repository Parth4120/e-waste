import React from 'react'

import './Home.css';
import About from './About';
import Services from './Services';
import Footer from '../components/Footer'
import ContactUs from './ContactUs';
import Gif from './Gif';

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
    <div>
      <Gif/>
    </div>
      <div>
        <ContactUs></ContactUs>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
