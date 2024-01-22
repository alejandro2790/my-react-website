// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const NavBar = () => {
  const sections = ['HOME', 'ABOUT', 'GET INVOLVED', 'RESOURCES', 'RESULTS', 'CITY CONTACT'];

  return (
    <nav>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>{section}</li>
        ))}
        <li className="flag">
          <img src="/english-flag.png" alt="English Flag" />
          <span>English</span>
        </li>
        <li className="flag">
          <img src="/french-flag.png" alt="French Flag" />
          <span>French</span>
        </li>
      </ul>
    </nav>
  );
};

const PhotoSlider = () => {
  const [photos, setPhotos] = useState(['/photo1.jpg', '/photo2.jpg', '/photo3.jpg', '/photo4.jpg', '/photo5.jpg', '/photo6.jpg', '/photo7.jpg', '/photo8.jpg', '/photo10.jpg', '/photo11.jpg', '/photo13.jpg' ]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [photos.length]);

  return (
    <div className="photo-slider">
      <div className="slider-container">
        <div className="overlay-text">
          <p>Are you ready for the next challenge?</p>
        </div>
        <div className="overlay-text-date">
          <p>JUNE 2-8, 2024</p>
          <button className="overlay-text-date button">
            Register Now &#10140;
          </button>
        </div>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            style={{ display: index === currentPhotoIndex ? 'block' : 'none', width: '1800px', height: '650px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

const Event = ({ name, dates, logoSrc }) => (
  <div className="event">
    <div className="event-info">
      <img src={logoSrc} alt={`${name} Logo`} style={{ maxHeight: '90px' }} />
      <p>{name}</p>
      <p>{dates}</p>
      <button className="action-button-event">Register Now! &#10140;</button>
    </div>
  </div>
);

const CommuterChallengeRegistration = () => (
  <div className="commuter-challenge-container">
    <div className="commuter-challenge-title">
      <h2>REGISTRATION: COMMUTER CHALLENGE</h2>
    </div>
    <div className="commuter-challenge-list">
      <button className="commuter-challenge-button" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="/employees.png"
          alt="Employee Icon"
          style={{ width: '50px', height: '50px', marginBottom: '5px', filter: 'invert(100%)' }}
        />
        Employee
      </button>
      <button className="commuter-challenge-button" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="/user.png"
          alt="Employee Icon"
          style={{ width: '50px', height: '50px', marginBottom: '5px', filter: 'invert(100%)' }}
        />
        Individual
      </button>
      <button className="commuter-challenge-button" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="/office-building.png"
          alt="Employee Icon"
          style={{ width: '50px', height: '50px', marginBottom: '5px', filter: 'invert(100%)' }}
        />
        Work Place
      </button>
      <button className="commuter-challenge-button" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src="/earth-grid.png"
          alt="Employee Icon"
          style={{ width: '50px', height: '50px', marginBottom: '5px', filter: 'invert(100%)' }}
        />
        Region
      </button>
    </div>
  </div>
);

const AdditionalSection = () => (
  <div className="additional-section-container">
    <div className="commuter-challenge-title"> {/* Use the same class name as in other sections */}
      <h2>COMMUTER CHALLENGE IN CANADA</h2>
    </div>
    <div className="additional-section-left">
      <img src="/canada25.jpg" alt="Your Photo" />
    </div>
    <div className="additional-section-right">
      <div className="section-title">
        <h2>Over 25 years of Commuter Challenge in Canada!</h2>
      </div>
      <div className="section-body">
        <p>
          Contact your regional coordinator to find out what's new in your
          region. Participation fee may apply. Payments can be made here
          and we graciously accept all donations:
        </p>
      </div>
      <div className="dropdown-menu">
        {/* Include your dropdown menu code here */}
      </div>
      <button className="action-button-additional">Pay Now! &#10140;</button>
    </div>
  </div>
);


function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/logo192.png" alt="Logo" style={{ height: '100px' }} />
        </div>
        <NavBar />
        <main>
          <PhotoSlider />
          <div className="events-container">
            <div className="events-title">
              <h2>UPCOMING EVENTS</h2>
            </div>
            <div className="events-list">
              <Event name="Bougeons en hiver: Jack Frost Challenge" dates="February 11-17, 2024" logoSrc="/Jack-Frost-Challenge-w-french-300x94.jpeg" />
              <Event name="National" dates="June 2-8, 2024" logoSrc="/logo192.png" />
              <Event name="Campus" dates="October 7-11, 2024" logoSrc="/campus-logo-horizontal-BLUE-300x103.jpeg" />
            </div>
          </div>
          <CommuterChallengeRegistration />
          <AdditionalSection />
        </main>
      </header>
    </div>
  );
}

export default App;
