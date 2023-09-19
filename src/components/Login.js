import React from 'react'
import './login.css'
import google from './Assets/google.png'

const Login = () => {
  return (
    <>
      <div className='loginWrapper'>
  
        <div className='mainLogin'>
          {/* leftside */}
          <div className='loginleft'>
          <h1 className='loginheading'>Login</h1>

            <label htmlFor='email' className='labelContent'>Email Address</label>
            <input type="text" id='email' placeholder='Email-address' className='inputbar'></input><br />
            <label htmlFor='password' className='labelContent'>Password</label>
            <input type="password" id='password' placeholder='Password' className='inputbar'></input>
            <p className='reset'>Reset Password</p>

            <p>Remember Password</p>
            <button className='loginbtn'>Login</button>
            <p className='logintext'>Don't have an account ? <a href="/" >Sign up</a></p>

            <div className='line'>
              <hr className='startLine' /> <span className='or'>Or</span> <hr className='startLine' />
            </div>

            <a href='/'>
              <button className='authorize'>
                <img src={google} width='20px' height='20px' alt='googleImg'></img>
                <p>Authorize with Google</p>
              </button>
            </a>


          </div>

          {/* rightside */}

        </div>

      </div>
    </>
  )
}

export default Login