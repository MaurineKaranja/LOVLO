import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { supabase } from '../components/supabaseClient';
import './appointmentBookingPage.css'
import icon2 from '../assets/pic6.jpg'
import SignOutButton from './signOutButton';

function AppointmentBookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('appointments').insert([
        {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          date: formData.date,
          time: formData.time,
        },
      ]);
      
      if (error) {
        throw error;
      }
  
      
      setFormData({
        name: '',
        phoneNumber: '',
        date: '',
        time: '',
      });
  
     
      alert('Appointment confirmed successfully.');
  
    } catch (error) {
      console.error('Error booking appointment:', error.message);
      
    }
  };

  return (
    <div className="appointment-booking-page">
      <div className='booking-container'>
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
      <Link to="/serviceSelectionPage">Go back to Service Selection Page</Link>
      <SignOutButton/>
      </div>
      <div className='icon2'>
        <img className='image2' src={icon2}/>
      </div>
    </div>
  );
}

export default AppointmentBookingPage;
