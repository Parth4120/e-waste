import React from 'react'
import manufacturer from '../components/Assets/manufacturer.svg'
import producer from '../components/Assets/producer.png'
import recycler from '../components/Assets/recycler.png'
import refurbisher from '../components/Assets/refurbisher.png'
import './signup.css';

const Signup = () => {
  return (
    <div className='mainSignup'>
     {/* leftside */}
     <div >
      <h1>Sign Up</h1>
      <label htmlFor='fullname'>Fullname</label><br/>
      <input type="text" id='fullname'></input><br/>
      <label htmlFor='mobile'>Mobile Number</label><br/>
      <input type="text" id='mobile'></input><br/>
      <label htmlFor='email'>Email Address</label><br/>
      <input type="text" id='email'></input><br/>
      <label htmlFor='password'>Password</label><br/>
      <input type="text" id='password'></input>

    </div>
    {/* right side */}
    <div>
        {/* cards */}
        <div className='signCard'>
             <div className='cardSignContent'>
                <img src={producer} width='60px'></img>
                <p>Producer</p>
             </div>
             <div className='cardSignContent'>
                <img src={manufacturer} width='60px'></img>
                <p>Manufacturer</p>
             </div>
             <div className='cardSignContent'>
                <img src={recycler} width='60px'></img>
                <p>Recycler</p>
             </div>
             <div className='cardSignContent'>
                <img src={refurbisher} width='60px'></img>
                <p>Refurbisher</p>
             </div>
        </div>


    </div>
     
    </div>
  )
}

export default Signup
