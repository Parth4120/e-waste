import React from 'react'
import './Footer.css'
import imgfooter from '../images/e-waste.png';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';
import {GrFormLocation} from 'react-icons/gr';
import {FiMail} from 'react-icons/fi';
import {FiPhoneCall} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer-container-main'>
    {/* box-1 */}
    <div className='footer-box-1'>
    <div className='footer-box-1-img'>
        <img src={imgfooter} alt="" />
      </div>
      <div className='footer-box-1-content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi quidem accusamus aut unde assumenda deserunt necessitatibus blanditiis at dicta perspiciatis dolorum beatae, iusto asperiores.</p>
      </div>
      <div className='footer-box-1-icon'>
      <div className='footer-box-1-icon-1'>
      <NavLink to='/'>
            <BsFacebook/>
        </NavLink>
      </div>
       <div className='footer-box-1-icon-2'>
       <NavLink to='/'>
            <AiFillInstagram/>
        </NavLink>
       </div>
       <div className='footer-box-1-icon-3'>
       <NavLink to='/'>
            <AiFillTwitterCircle/>
        </NavLink>
       </div>
        
       <div className='footer-box-1-icon-4'>
       <NavLink to='/'>
            <BsLinkedin/>
        </NavLink>
       </div>
        
      </div>
    </div>

    {/* box-2 */}
    <div className='footer-box-2'>
        <div className='footer-box-2-heading'>
            <h2>Service</h2>
        </div>
        <div className=''>
            <ul className='footer-box-2-ul'>
                <li>Lorem</li>
                <li>Service</li>
                <li>about</li>
                <li>json</li>
                <li>js</li>
            </ul>
        </div>
    </div>

    {/* box-3 */}
    <div className='footer-box-3'>
        <div className='footer-box-3-heading'>
            <h2>Information</h2>
        </div>
        <div className='footer-box-3-content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore nostrum, accusamus repellendus expedita exercitationem!</p>
        </div>
    </div>

    {/* box-4 */}
    <div className='footer-box-4'>
        <div className='footer-box-4-content'>
            <div>
            <span> Want to Continue the</span>
            </div>
            <div>
            <span>Conversation</span>
            </div>
        </div>

        <div className='footer-box-4-option'>
            <div className=''>
                <p>
                <span><GrFormLocation/></span> 
                <span>Location</span>
                </p>
            </div>
            <div>
            <p>
                <span><FiMail/></span> 
                <span>Location</span>
            </p>
            </div>
            <div>
            <p>
                <span><FiPhoneCall/></span> 
                <span>Location</span>
            </p>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
