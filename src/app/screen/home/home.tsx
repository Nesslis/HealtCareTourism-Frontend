import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css'; 
import {InfertilityIcon, chinIcon, eyeIcon, hairIcon, lipsIcon, noseIcon, stomachIcon, toothIcon} from '../../components/icons/icons.tsx'
import SelectLocation from '../../components/selectLocation/selectLocation.tsx';

function Home() {
    return (
      <div className="Home">
        <Hero />
        <SelectLocation/>
        <Features />
        <Testimonials />
        <Footer />
      </div>
    );
  }
  
  export default Home;

  function HeroCarousel() {
    return (
      <section className="hero">
        <Carousel
        className='sliderImage'
            autoPlay={true}
            interval={5000} // Adjust the interval between slides
            infiniteLoop={true} // Enable infinite loop
            showThumbs={false} // Hide thumbnails
            showStatus={false} // Hide status indicators
            stopOnHover={false} // Do not stop autoplay on hover
        >
            <div >
                <img src="./try1jpg" alt="Slide 1" />
            </div>
            <div>
                <img src="./try2.jpg" alt="Slide 2" />
            </div>
            <div>
                <img src="try6.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="try7.jpg" alt="Slide 4" />
            </div>
            {/* Add more slides as needed */}
        </Carousel>
        <div className="hero-content">
        <h1>Welcome to Hotel - Clinic Matching/Routing App</h1>
        <p>A brief description of your product or service</p>
      </div>
      </section>
    );
}

function Hero() {
  return (
    <section className="hero">
      <div className="background-image"></div>
      <div className="hero-content">
        <h1>Welcome to Hotel - Clinic Matching/Routing App</h1>
        <p>A brief description of your product or service</p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="top-features">
        <div className="feature">
        {toothIcon()}
          <p>Dental Treatment and Beauty Service</p>
        </div>
        <div className="feature">
          {noseIcon()}
          <p>Cosmetic Surgery and nose treatment</p>
        </div>
        <div className="feature">
        {InfertilityIcon()}
          <p>Infertility Treatment & IVF</p>
        </div>
        <div className="feature">
          {hairIcon()}
          <p>Hair and Eyebrow Transplant</p>
        </div>
      </div>
      <div className="bottom-features">
        <div className="feature">
        {chinIcon()}
          <p>Removing Double chin</p>
        </div>
        <div className="feature">
        {eyeIcon()}
          <p>Cosmetic Eye Surgery (Blepharoplasty)</p>
        </div>
        <div className="feature">
        {lipsIcon()}
          <p>Lip Cosmetic Surgery</p>
        </div>
        <div className="feature">
        {stomachIcon()}
          <p>Gastric reduction Surgery</p>
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial">
        <p>Testimonial text goes here...</p>
        <p>- Testimonial Author</p>
      </div>
      {/* Add more testimonials as needed */}
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </div>
      <p>Contact information goes here...</p>
    </footer>
  );
}