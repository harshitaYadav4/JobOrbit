import React from 'react';
import { Link } from 'react-router-dom';
import { IconBriefcase } from './Icons';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
            <div className="logo-mark"><IconBriefcase size={16} color="#fff" /></div>
            <h2 style={{fontSize:20,margin:0,color:'#fff',fontWeight:700}}>JobPortal</h2>
          </div>
          <p style={{color:'rgba(255,255,255,0.7)',lineHeight:1.7,fontSize:14}}>India's trusted platform for job seekers and employers. Find your dream role across Mumbai, Bengaluru, Delhi NCR and 50+ cities.</p>
        </div>
        <div>
          <h4 style={{color:'#fff',marginBottom:16,fontWeight:700,fontSize:16}}>Company</h4>
          <ul style={{lineHeight:2.2}}>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Our Team</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{color:'#fff',marginBottom:16,fontWeight:700,fontSize:16}}>Job Categories</h4>
          <ul style={{lineHeight:2.2}}>
            <li><a href="#">IT / Software</a></li>
            <li><a href="#">Financial Services</a></li>
            <li><a href="#">Engineering</a></li>
            <li><a href="#">Healthcare</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{color:'#fff',marginBottom:16,fontWeight:700,fontSize:16}}>Newsletter</h4>
          <p style={{color:'rgba(255,255,255,0.65)',fontSize:14,marginBottom:14,lineHeight:1.6}}>Subscribe to get the latest job updates directly in your inbox.</p>
          <div style={{display:'flex',gap:8}}>
            <input type="email" placeholder="Email Address" className="input-field" style={{borderRadius:12,padding:'12px 16px',border:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.06)',color:'#fff',fontSize:14,flex:1}} />
            <button className="btn-primary" style={{whiteSpace:'nowrap',padding:'12px 20px'}}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop:32,borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:20,textAlign:'center',color:'rgba(255,255,255,0.5)',fontSize:13}}>
        © {new Date().getFullYear()} JobPortal India. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;