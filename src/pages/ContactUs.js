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
  const [formData,setFormData]=useState({firstName:""})

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
      <div>
        <img src={imgContect} alt="" />
      </div>
      {/* form */}
      <div>
      <form className="form"action="" onSubmit={submitHandler}>
      <div>
      <label htmlFor="">
            <p>First Name <sup>*</sup></p>
            <input type="text" name='firstName' placeholder='enter first name' onChange={changeHandler} value={formData.firstName} required />
        </label>


        <label htmlFor="">
        <p>Email Address <sup>*</sup> </p>
        <input type="email" name="email" placeholder='enter email id' value={formData.email} onChange={changeHandler}  id="" required/>
        </label>
      </div>
      <div>
        <textarea name="textArea" value={formData.textArea} placeholder='enter your quarry' id="" cols="15" rows="5" onChange={changeHandler} required></textarea>
      </div>

      <div>Submit</div>

      
      </form>
      </div>
    </div>
  )
}

export default ContactUs
