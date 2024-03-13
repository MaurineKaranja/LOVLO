import React, { useState, useEffect } from 'react';
import { supabase } from '../components/supabaseClient'; // import your Supabase client
import { Link } from "react-router-dom";
import Modal from './appointmentBookingPage'
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic7 from '..//assets/pic7.jpg';
import pic3 from '../assets/pic3.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import './serviceSelectionPage.css';

function ServiceSelectionPage() {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    async function fetchServices() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*');

        if (error) {
          throw error;
        }

        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error.message);
      }
    }

    fetchServices();
  }, []);

  const handleSearch = () => {
    // Perform search operation based on searchQuery
    // You can filter services based on service name, description, etc.
    // For example:
    const filteredServices = services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Update the services state with filtered services
    setServices(filteredServices);
  };

  const handleSelectService = (service) => {
    if (selectedService && selectedService.id === service.id) {
      setSelectedService(null);
      
    } else {
    setSelectedService(service);
    
    }
  };

  

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel-slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={pic2} className="image" alt="pic2" />
          </div>
          <div className="carousel-item">
            <img src={pic7} className="image" alt="pic7" />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="image" alt="pic3" />
          </div>
          <div className="carousel-item">
            <img src={pic9} className="image" alt="pic9" />
          </div>
          <div className="carousel-item">
            <img src={pic8} className="image" alt="pic8" />
          </div>
          <div className="carousel-item active">
            <img src={pic1} className="image" alt="pic1" />
          </div>
        </div>
      </div>
      <div className="section-one">
        <h2 className="title">Choose Your Nail Service</h2>
        <div className="search-container">
          <input
            className="search-item1"
            type="text"
            placeholder="Search for a service"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button className="search-item2" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="service-cards-container">
        {services.map(service => (
          <div className="service-card" key={service.id} onClick={() => handleSelectService(service)}>
            {service.image && <img src={service.image} alt={service.name} className='image'/>}
            <h3>{service.name}</h3>
            {/* Display description and price if the service is selected */}
            {selectedService && selectedService.id === service.id && (
              <div>
                <p>Description: {service.description}</p>
                <p>Price: ${service.price}</p>
                 {/* Add select button to trigger appointment modal */}
                <Link to='/appointmentBookingPage'>Select</Link>
                {/* Add logic to display other images of the selected service */}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ServiceSelectionPage;



