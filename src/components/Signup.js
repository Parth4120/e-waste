import React from 'react'
import manufacturer from '../components/Assets/manufacturer.svg'
import producer from '../components/Assets/producer.png'
import recycler from '../components/Assets/recycler.png'
import refurbisher from '../components/Assets/refurbisher.png'
import './signup.css';

const Signup = () => {
  return (
   <>
   <div className='signupWrapper'>
    <div className='mainSignup'>
     {/* leftside */}
     <div className='infoleft'>
      <h1 className='signupheading'>Sign Up</h1>
      <label htmlFor='fullname' className='labelContent'>Username</label>
      <input type="text" id='fullname' className='inputbar' placeholder='Username'></input><br/>
      <label htmlFor='mobile' className='labelContent'>Mobile Number</label>
      <input type="text" id='mobile' placeholder='Mobile number' className='inputbar'></input><br/>
      <label htmlFor='email' className='labelContent'>Email Address</label>
      <input type="text" id='email' placeholder='Email-address' className='inputbar'></input><br/>
      <label htmlFor='password' className='labelContent'>Password</label>
      <input type="text" id='password' placeholder='Password'className='inputbar'></input>

      <div className='create-already-acount'>
<button className='createAcountbtn'>Create Account</button>
  <p className='signuptext'>Already have an account ?<a href="/">Login</a></p>
</div>

    </div>
    {/* right side */}
    <div className='inforight'>
        {/* cards */}
        <div className='signCard'>
             <div className='cardSignContent'>
                <img src={producer} width='50px' alt='producer' className='cardimg'></img>
                <p>Producer</p>
             </div>
             <div className='cardSignContent'>
                <img src={manufacturer} width='50px' alt='manufacturer' className='cardimg'></img>
                <p>Manufacturer</p>
             </div>
             <div className='cardSignContent'>
                <img src={recycler} width='50px' alt='recycler' className='cardimg'></img>
                <p>Recycler</p>
             </div>
             <div className='cardSignContent'>
                <img src={refurbisher} width='50px' alt='refurbisher' className='cardimg'></img>
                <p>Refurbisher</p>
             </div>
        </div>


    </div>

    </div>



</div>
 </>
  )
}

export default Signup
