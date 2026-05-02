import React from 'react';
import { Link } from 'react-router-dom';
import { IconUser, IconMail, IconMapPin, IconFileText, IconBookmark, IconBriefcase, IconClock } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const Profile = () => {
  usePageTitle('My Profile');

  return (
    <div className="profile-page">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">RK</div>
          <div className="profile-info">
            <h2>Rahul Kumar</h2>
            <p>Senior Software Engineer • Bengaluru, Karnataka</p>
            <p style={{marginTop:6,color:'var(--accent)',fontSize:13,fontWeight:600}}>Profile 85% complete</p>
          </div>
        </div>

        {/* Profile Cards */}
        <div className="profile-grid">
          {/* Personal Info */}
          <div className="profile-card">
            <h3><IconUser size={18} color="var(--accent)" style={{marginRight:8}} /> Personal Details</h3>
            <div className="profile-detail">
              <span>Full Name</span>
              <span>Rahul Kumar</span>
            </div>
            <div className="profile-detail">
              <span>Email</span>
              <span>rahul@example.com</span>
            </div>
            <div className="profile-detail">
              <span>Phone</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="profile-detail">
              <span>Location</span>
              <span>Bengaluru, Karnataka</span>
            </div>
            <div className="profile-detail">
              <span>Experience</span>
              <span>5+ Years</span>
            </div>
          </div>

          {/* Resume & Skills */}
          <div className="profile-card">
            <h3><IconFileText size={18} color="var(--accent)" style={{marginRight:8}} /> Resume & Skills</h3>
            <div className="profile-detail">
              <span>Resume</span>
              <span style={{color:'var(--accent)'}}>resume_2026.pdf</span>
            </div>
            <div className="profile-detail">
              <span>Primary Skill</span>
              <span>Full Stack Development</span>
            </div>
            <div style={{marginTop:16}}>
              <span style={{color:'var(--muted-text)',fontSize:13,marginBottom:10,display:'block'}}>Skills</span>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">AWS</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Saved Jobs */}
          <div className="profile-card">
            <h3><IconBookmark size={18} color="var(--accent)" style={{marginRight:8}} /> Saved Jobs</h3>
            {[
              { title: 'Senior Software Engineer', company: 'Infosys', location: 'Bengaluru' },
              { title: 'Product Manager', company: 'Flipkart', location: 'Mumbai' },
              { title: 'DevOps Engineer', company: 'Wipro', location: 'Pune' },
            ].map((job, i) => (
              <div key={i} className="profile-detail" style={{flexDirection:'column',alignItems:'flex-start',gap:4}}>
                <span style={{color:'#fff',fontWeight:600}}>{job.title}</span>
                <span style={{fontSize:13}}>{job.company} • {job.location}</span>
              </div>
            ))}
            <Link to="/jobs" className="btn-primary" style={{display:'block',textAlign:'center',marginTop:18,padding:'10px 16px',fontSize:14,textDecoration:'none',borderRadius:12}}>Browse More Jobs</Link>
          </div>

          {/* Account Settings */}
          <div className="profile-card">
            <h3><IconBriefcase size={18} color="var(--accent)" style={{marginRight:8}} /> Account Settings</h3>
            <div className="profile-detail">
              <span>Account Type</span>
              <span>Job Seeker</span>
            </div>
            <div className="profile-detail">
              <span>Email Notifications</span>
              <span style={{color:'var(--accent)'}}>Enabled</span>
            </div>
            <div className="profile-detail">
              <span>Profile Visibility</span>
              <span style={{color:'var(--accent)'}}>Public</span>
            </div>
            <div className="profile-detail">
              <span>Member Since</span>
              <span>Jan 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
