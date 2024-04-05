import React, { useState, useEffect } from 'react';
import clinicsData from '../../components/clinicsData.json'
import './clinics.css';

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
    const [clinicsPerPage] = useState(8); // Number of clinics per page
  
    useEffect(() => {
      // Fetch clinics data from JSON file
      setClinics(clinicsData);
      console.log(clinicsData)
    }, []);

  // Get current clinics
  const indexOfLastClinic = currentPage * clinicsPerPage;
  const indexOfFirstClinic = indexOfLastClinic - clinicsPerPage;
  const currentClinics = clinics.slice(indexOfFirstClinic, indexOfLastClinic);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="clinics-page">
      <h1>Clinics</h1>
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
  );
};

export default Clinics;
