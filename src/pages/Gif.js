import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi';
import gifimg from '../images/gif-text.png';
import './Gif.css'
const Gif = () => {
  return (
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
  )
}

export default Gif
