import React, { useState } from 'react';
import './ContactUs.css';
import imgContect from '../images/E-waste-data.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({ firstName: "", email: "", textArea: "" });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  

  function submitHandler(event) {
    event.preventDefault();
    const data = { ...formData };
    console.log(data);

    // You can reset the form fields by creating a new empty object
    setFormData({ firstName: "", email: "", textArea: "" });
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

        <form onSubmit={submitHandler} id="contactUs-form">
          <div>
              <input
                className='form-Name'
                type="text"
                name='firstName'
                placeholder='Enter name'
                value={formData.firstName}
                onChange={changeHandler}
                required
              />
          </div>

          <div>
              <input
                className='form-email'
                type="email"
                name="email"
                placeholder='Enter email id'
                value={formData.email}
                onChange={changeHandler}
                required
              />
          </div>

          <div>
              <textarea
                className='form-text'
                name="textArea"
                value={formData.textArea}
                placeholder='Enter your query'
                cols="15"
                rows="5"
                onChange={changeHandler}
                required
              ></textarea>
          </div>

          <div className='form-btn-container'>
            <button className='form-btn' type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;


 