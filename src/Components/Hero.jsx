import React from 'react';
import { IconSearch, IconUsers, IconBuilding, IconFileText } from './Icons';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-inner">
        <div style={{width: '100%', textAlign: 'center'}}>
          <h1>Find Your Dream Job Today!</h1>
          <p style={{color: 'rgba(255,255,255,0.92)', marginTop:8, fontSize:18, lineHeight:1.6}}>
            Connecting you to the best opportunities across India.
          </p>

          <div className="search-row" style={{marginTop:28}}>
            <input type="text" placeholder="Job Title or Company" />
            <select>
              <option>Choose Location</option>
              <option>Mumbai, Maharashtra</option>
              <option>Bengaluru, Karnataka</option>
              <option>Delhi NCR</option>
              <option>Hyderabad, Telangana</option>
              <option>Pune, Maharashtra</option>
              <option>Chennai, Tamil Nadu</option>
              <option>Kolkata, West Bengal</option>
              <option>Noida, UP</option>
              <option>Gurugram, Haryana</option>
            </select>
            <select>
              <option>Job Category</option>
              <option>IT / Software</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Healthcare</option>
            </select>
            <select>
              <option>Experience</option>
              <option>Fresher</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5-10 Years</option>
              <option>10+ Years</option>
            </select>
            <button className="btn-primary" style={{display:'flex',alignItems:'center',gap:8}}>
              <IconSearch size={16} color="#fff" /> Search
            </button>
          </div>

          <div className="hero-stats">
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <IconUsers size={18} color="rgba(255,255,255,0.8)" />
              <span><strong>25.5k+</strong> Candidates</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <IconBuilding size={18} color="rgba(255,255,255,0.8)" />
              <span><strong>18.2k+</strong> Companies</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <IconFileText size={18} color="rgba(255,255,255,0.8)" />
              <span><strong>10.1k+</strong> Posted Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;