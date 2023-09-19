import React from 'react'
import gifimg from'../images/gif-text.png';
import './Home.css';
import About from './About';
import Services from './Services';
import {BiRightArrowAlt} from 'react-icons/bi'

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

       {/* gif-text */}
       <div className='gif-text'>
        <div style={{width:'700px'}}>
          <p className='gif-text-main-heading'>
          "Turning the Tide on E-Waste: A Sustainable Solution for a Digital World"
          </p>
          
          
          <p className='gif-text-slogen'>Turn Your Old Gadgets into Green Rewards!</p>

          <button className='explore-btn'>
            <p>Explore more</p>
            <BiRightArrowAlt/>
          </button>
        </div>
        <div>
          <img src={gifimg}/>
        </div>
      </div>
    </div>
  )
}

export default Home
