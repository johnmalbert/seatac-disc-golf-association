import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="intro">
        <h1>Chuck Mintz Disc Golf</h1>
        <button className="explore-button" onClick={() => navigate('/home')}>
          Click to Explore
        </button>
        <img src="/images/cmdg.jpg" alt="Disc Golf Icon" className="small-image" />
      </div>
    </div>
  );
};

export default LandingPage;
