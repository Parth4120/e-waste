import React from 'react'
import './ContactUs.css';
import imgContect from '../images/E-waste-data.png';
import { useState } from 'react';


const ContactUs = () => {

    // const [formData,setFormData]=useState({firstName:"",email:"",textArea:""});
    // function changeHandler(event){
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [event.target.name]:event.target.value
    //     }))
    // }
    // function submitHandler(event){
    //   event.preventDefault();
    //   const data={
    //     ...formData
    //   }
    //   console.log(data)
    // }
  const [formData,setFormData]=useState({firstName:"",email:"",textArea:""})

  function changeHandler(event){
    setFormData((prevData) => ({
        ...prevData,
        [event.target.name]:event.target.value
    }))
  }
  function submitHandler(event){
      event.preventDefault();
      const data={
        ...formData
      }
      console.log(data)
  }
  return (
    <div className='contactus-container'>
      <div className='contactus-img'>
        <img src={imgContect} alt="" />
      </div>
      
      <div className='form'>
      <div className='form-heading'>
        <h1>Request an Inquiry</h1>
      </div>
      
      <form action="" onSubmit={submitHandler} form-one className='form-user'>
      <div>
      <label htmlFor="">
            <input className='form-Name' type="text" name='firstName' placeholder='enter name' onChange={changeHandler} value={formData.firstName} required />
        </label>


        <label htmlFor="">
        <input className='form-email' type="email" name="email" placeholder='enter email id' value={formData.email} onChange={changeHandler}  id="" required/>
        </label>
      </div>
      <div>
        <textarea className='form-text'name="textArea" value={formData.textArea} placeholder='enter your quarry' id="" cols="15" rows="5" onChange={changeHandler} required></textarea>
      </div>

      <div className='form-btn-container'>
      <button className='form-btn'>Submit</button>
      </div>
      </form>
      </div>

      </div>
    // </div>
  )
}

export default ContactUs
