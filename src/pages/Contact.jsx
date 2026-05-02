import React from 'react';
import { IconPhone, IconMail, IconMapPin, IconClock } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const contactCards = [
  { icon: <IconPhone size={22} color="var(--accent)" />, label: 'Call for inquiry', value: '+91 98765 43210' },
  { icon: <IconMail size={22} color="var(--accent)" />, label: 'Send us email', value: 'support@jobportal.in' },
  { icon: <IconMapPin size={22} color="var(--accent)" />, label: 'Visit our office', value: 'Connaught Place, New Delhi' },
  { icon: <IconClock size={22} color="var(--accent)" />, label: 'Working hours', value: 'Mon – Sat, 9 AM – 7 PM' },
];

const Contact = () => {
  usePageTitle('Contact Us');
  return (
    <div style={{paddingBottom:64}}>
      <div className="page-title" style={{paddingTop:40,paddingBottom:40}}>
        <h2 style={{fontSize:36,fontWeight:800,color:'#fff',marginBottom:10}}>Contact Us</h2>
        <p style={{color:'rgba(255,255,255,0.75)',fontSize:16,marginTop:0}}>We'd love to hear from you. Reach out anytime!</p>
      </div>

      <div className="container">
        <div className="contact-layout" style={{display:'grid',gridTemplateColumns:'1fr 460px',gap:40,alignItems:'start'}}>

          {/* Left */}
          <div>
            <h2 style={{fontSize:24,fontWeight:800,marginBottom:24,color:'#fff'}}>Get In Touch</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
              {contactCards.map((card, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-icon">{card.icon}</div>
                  <div style={{color:'var(--accent)',fontWeight:700,fontSize:15,marginBottom:6}}>{card.label}</div>
                  <div style={{color:'rgba(255,255,255,0.75)',fontSize:14}}>{card.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background:'var(--card)',
            borderRadius:20,
            padding:'36px 32px',
            boxShadow:'0 16px 48px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{fontWeight:700,fontSize:20,marginBottom:6,marginTop:0,color:'var(--text)'}}>Send a Message</h3>
            <p style={{color:'var(--muted-text)',fontSize:14,marginBottom:24,marginTop:0}}>We'll get back to you within 24 hours.</p>
            <form>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <input type="text" placeholder="First Name" className="input-field" style={{borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,0,0,0.08)'}} />
                <input type="text" placeholder="Last Name" className="input-field" style={{borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,0,0,0.08)'}} />
              </div>
              <input type="email" placeholder="Email Address" className="input-field" style={{marginTop:12,borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,0,0,0.08)'}} />
              <input type="text" placeholder="Subject" className="input-field" style={{marginTop:12,borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,0,0,0.08)'}} />
              <textarea placeholder="Your Message" rows="5" className="input-field" style={{marginTop:12,borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,0,0,0.08)',resize:'vertical',fontFamily:'inherit'}}></textarea>
              <button className="btn-primary" style={{width:'100%',marginTop:16,padding:'14px 24px',fontSize:16,fontWeight:700,borderRadius:14}}>Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;