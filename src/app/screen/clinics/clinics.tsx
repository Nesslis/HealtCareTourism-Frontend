import React, { useState, useEffect } from 'react';
import clinicsData from '../../components/clinicsData.json'
import './clinics.css';
import { InfertilityIcon, chinIcon, eyeIcon, hairIcon, lipsIcon, noseIcon, othersIcon, stomachIcon, toothIcon } from '../../components/icons/icons.tsx';

interface Clinic {
    photo: string;
    name: string;
    speciality: string;
    location: string;
    reviews: string;
  }

const Clinics: React.FC = () => {
    const [clinics, setClinics] = useState<Clinic[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [clinicsPerPage] = useState(6); // Number of clinics per page
    const [filteredClinics, setFilteredClinics] = useState<Clinic[]>([]);
    const [searchName, setSearchName] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedRating, setSelectedRating] = useState<string[]>([]);
  
    useEffect(() => {
      // Fetch clinics data from JSON file
      setClinics(clinicsData);
      setFilteredClinics(clinicsData);
      console.log(clinicsData)
    }, []);

    useEffect(() => {
      // Filter clinics based on search criteria
      let filtered = clinics.filter(clinic => clinic.name.toLowerCase().includes(searchName.toLowerCase()));
  
      if (selectedLocation) {
        filtered = filtered.filter(clinic => clinic.location.includes(selectedLocation));
      }
      if (selectedRating.length > 0) {
        filtered = filtered.filter(clinic => selectedRating.includes(clinic.reviews));
      }
  
      setFilteredClinics(filtered);
    }, [clinics, searchName, selectedLocation, selectedRating]);

    const handleRatingSelect = (rating: string) => {
      const updatedRating = [...selectedRating];
      if (updatedRating.includes(rating)) {
        const index = updatedRating.indexOf(rating);
        updatedRating.splice(index, 1);
      } else {
        updatedRating.push(rating);
      }
      setSelectedRating(updatedRating);
    };
    const handleFilter = () => {
      // Filter clinics based on search criteria
      let filtered = clinicsData.filter(clinic => clinic.name.toLowerCase().includes(searchName.toLowerCase()));
      if (selectedLocation) {
        filtered = filtered.filter(clinic => clinic.location.includes(selectedLocation));
      }
      if (selectedRating.length > 0) {
        filtered = filtered.filter(clinic => selectedRating.includes(clinic.reviews));
      }
      // Update the state with filtered clinics
      setFilteredClinics(filtered);
    };
  // Get current clinics
  const indexOfLastClinic = currentPage * clinicsPerPage;
  const indexOfFirstClinic = indexOfLastClinic - clinicsPerPage;
  const currentClinics = clinics.slice(indexOfFirstClinic, indexOfLastClinic);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="clinics-page">
      <div className="filter-section">
      <h2>Filter</h2>
        <input type="text" placeholder="Search by clinic name..." value={searchName} onChange={e => setSearchName(e.target.value)} />
        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          <option value="">Select location</option>
          <option value="Ankara">Ankara</option>
          <option value="Antalya">Antalya</option>
          <option value="İstanbul">İstanbul</option>
        </select>
        <div className="review-filter">
        <h2>Reviews</h2>
        <div className="review-list">
          <div className="review-item">
            <span>★★★★★</span>
            <div className={`review-circle ${selectedRating.includes("★★★★★") ? "selected" : ""}`} onClick={() => handleRatingSelect("★★★★★")}></div>
          </div>
          <div className="review-item">
            <span>★★★★☆</span>
            <div className={`review-circle ${selectedRating.includes("★★★★☆") ? "selected" : ""}`} onClick={() => handleRatingSelect("★★★★☆")}></div>
          </div>
          <div className="review-item">
            <span>★★★☆☆</span>
            <div className={`review-circle ${selectedRating.includes("★★★☆☆") ? "selected" : ""}`} onClick={() => handleRatingSelect("★★★☆☆")}></div>
          </div>
          <div className="review-item">
            <span>★★☆☆☆</span>
            <div className={`review-circle ${selectedRating.includes("★★☆☆☆") ? "selected" : ""}`} onClick={() => handleRatingSelect("★★☆☆☆")}></div>
          </div>
          <div className="review-item">
            <span>★☆☆☆☆</span>
            <div className={`review-circle ${selectedRating.includes("★☆☆☆☆") ? "selected" : ""}`} onClick={() => handleRatingSelect("★☆☆☆☆")}></div>
          </div>
        </div>
      </div>
      <button className='filter-button' onClick={handleFilter}>Filter</button>
    </div>
      <div className="clinics-section">
        <h1 className="clinics-header">Clinics</h1>
        <div className="circle-buttons">
        <div className="circle-button">{toothIcon()}</div>
        <div className="circle-button">{noseIcon()}</div>
        <div className="circle-button">{InfertilityIcon()}</div>
        <div className="circle-button">{hairIcon()}</div>
        <div className="circle-button">{chinIcon()}</div>
        <div className="circle-button">{eyeIcon()}</div>
        <div className="circle-button">{lipsIcon()}</div>
        <div className="circle-button">{stomachIcon()}</div>
      </div>
      <div className="clinics-container">
        {currentClinics.map((clinic: any, index: number) => (
          <div className="clinic-card" key={index}>
            <img src={clinic.photo} alt={clinic.name} />
            <div className="clinic-details">
              <h2>{clinic.name}</h2>
              <p><strong>Speciality:</strong> {clinic.speciality}</p>
              <p><strong>Location:</strong> {clinic.location}</p>
              <p><strong>Reviews:</strong> {clinic.reviews}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(clinics.length / clinicsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Clinics;
