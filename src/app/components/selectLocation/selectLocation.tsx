import React, { useState } from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import './location.css'; 

function SelectLocation() {
  const cities = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara',
    // Add more cities as needed
  ];

  const [selectedCity, setSelectedCity] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log('Selected location:', selectedCity);
    // Add additional logic here, such as passing the selectedLocation to a parent component
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="search-bar rounded-bar">
      <div className="location-info">
        <FaMapMarkerAlt className="location-icon" />
        <span className="location-label">Location : </span>  
      <span>|</span>
      <button className="explanation" onClick={toggleDropdown}>{selectedCity || 'Please choose a city ▼'}</button>
      {dropdownOpen && ( 
          <div className="dropdown">
            <ul>
              {cities.map(city => (
                <li key={city} onClick={() => handleCitySelect(city)}>{city}</li>
              ))}
            </ul>
          </div>
        )}
        
      <button className="location-button" onClick={handleSubmit}>
        <span>Submit</span>
      </button></div>
    </div>
  );
}

export default SelectLocation;
