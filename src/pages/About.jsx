import React, { useState } from 'react';
import './About.css';
import { IconUser, IconFileText, IconSearch, IconCheckCircle, IconTarget, IconShield, IconStar, IconUsers, IconBuilding, IconGlobe } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const StepCard = ({ icon, title, desc }) => (
  <article className="step-card">
    <div className="step-icon" aria-hidden>{icon}</div>
    <h4>{title}</h4>
    <p className="small muted">{desc}</p>
  </article>
);

const FAQItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-toggle" aria-hidden>{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a" style={{display: open ? 'block' : 'none'}}>
        <p className="muted">{a}</p>
      </div>
    </div>
  );
};

const TeamCard = ({ name, role, initials }) => (
  <div className="team-card">
    <div className="team-avatar">{initials}</div>
    <h4>{name}</h4>
    <p className="muted small">{role}</p>
  </div>
);

export default function About() {
  usePageTitle('About Us');
  return (
    <main className="about-page">
      {/* 1. HEADER */}
      <header className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p style={{color:'rgba(255,255,255,0.75)',fontSize:16,marginTop:8}}>India's trusted job portal connecting talent with opportunity</p>
        </div>
      </header>

      {/* 2. INTRO */}
      <section className="intro container">
        <div className="intro-grid">
          <div className="intro-left">
            <h2>We connect talent with opportunity</h2>
            <p className="muted">Our mission is to make job search and hiring simple, fair and effective. We design tools that give candidates clarity and employers confidence across 50+ Indian cities.</p>
          </div>
          <div className="intro-right">
            <p className="muted">Built by recruiters, engineers, and designers in Bengaluru, our platform focuses on meaningful matches, transparency, and human-centered workflows for the Indian job market.</p>
          </div>
        </div>

        <div className="intro-banner" aria-hidden />
      </section>

      {/* 3. STATS COUNTERS */}
      <section className="about-counters">
        <div className="container">
          <div className="counters-grid">
            <div className="counter-item">
              <div className="counter-icon"><IconUsers size={24} color="var(--accent)" /></div>
              <div className="counter-value">25,000+</div>
              <div className="counter-label">Active Candidates</div>
            </div>
            <div className="counter-item">
              <div className="counter-icon"><IconBuilding size={24} color="var(--accent)" /></div>
              <div className="counter-value">18,000+</div>
              <div className="counter-label">Companies Hiring</div>
            </div>
            <div className="counter-item">
              <div className="counter-icon"><IconFileText size={24} color="var(--accent)" /></div>
              <div className="counter-value">10,000+</div>
              <div className="counter-label">Jobs Posted Monthly</div>
            </div>
            <div className="counter-item">
              <div className="counter-icon"><IconGlobe size={24} color="var(--accent)" /></div>
              <div className="counter-value">50+</div>
              <div className="counter-label">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="how container">
        <h2 className="center">How it works</h2>
        <p className="muted center" style={{maxWidth:760,margin:'8px auto 20px'}}>Quick steps to get you from signup to hired.</p>

        <div className="steps-grid">
          <StepCard icon={<IconUser size={28} color="var(--accent)" />} title="Create Account" desc="Set up your profile and preferences in minutes." />
          <StepCard icon={<IconFileText size={28} color="var(--accent)" />} title="Upload Resume" desc="Share your skills and experience with employers." />
          <StepCard icon={<IconSearch size={28} color="var(--accent)" />} title="Find Jobs" desc="Search curated listings that match your goals." />
          <StepCard icon={<IconCheckCircle size={28} color="var(--accent)" />} title="Apply & Get Hired" desc="Apply confidently with tailored applications." />
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="why-us">
        <div className="container">
          <h2 className="center" style={{color:'#fff'}}>Why Choose JobPortal?</h2>
          <p className="center" style={{color:'rgba(255,255,255,0.7)',maxWidth:700,margin:'10px auto 36px'}}>We go beyond just listing jobs. Here's what makes us different.</p>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><IconTarget size={28} color="var(--accent)" /></div>
              <h4>AI-Powered Matching</h4>
              <p>Our smart algorithms match your skills with the right opportunities, saving you hours of searching.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><IconShield size={28} color="var(--accent)" /></div>
              <h4>Verified Companies</h4>
              <p>Every employer is verified. No spam, no scams — only genuine opportunities from trusted brands.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><IconStar size={28} color="var(--accent)" /></div>
              <h4>Premium Experience</h4>
              <p>From resume building to interview prep, we provide end-to-end career support at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMO */}
      <section className="promo">
        <div className="promo-bg">
          <div className="promo-overlay" />
          <div className="promo-inner container">
            <button className="play-btn" aria-label="Play promo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21"/></svg>
            </button>
            <h3>Good Life Begins With A Good Company</h3>
            <div className="promo-steps">
              <div><strong>01</strong><span>Sign up</span></div>
              <div><strong>02</strong><span>Explore</span></div>
              <div><strong>03</strong><span>Apply</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM */}
      <section className="team container">
        <h2 className="center">Meet Our Team</h2>
        <p className="muted center" style={{maxWidth:600,margin:'8px auto 32px'}}>The people behind India's fastest growing job portal.</p>
        <div className="team-grid">
          <TeamCard name="Arjun Sharma" role="CEO & Founder" initials="AS" />
          <TeamCard name="Priya Patel" role="Head of Product" initials="PP" />
          <TeamCard name="Rahul Mehta" role="Lead Engineer" initials="RM" />
          <TeamCard name="Sneha Reddy" role="Head of Design" initials="SR" />
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="faq container">
        <h2 className="center">Frequently Asked Questions</h2>
        <p className="muted center" style={{maxWidth:600,margin:'8px auto 24px'}}>Quick answers to common queries about our platform.</p>
        <div className="faq-grid">
          <FAQItem q="How do I create an account?" a="Click Register, fill your basic info, and verify your email. It takes less than 2 minutes." defaultOpen />
          <FAQItem q="Is JobPortal free for candidates?" a="Yes, absolutely! Job seekers can search, apply, and track applications for free. Premium features are available for enhanced visibility." />
          <FAQItem q="Can I edit my resume after uploading?" a="Yes — you can update your resume, skills, and profile at any time from your dashboard." />
          <FAQItem q="How do employers contact candidates?" a="Employers can reach out through our in-app messaging system or via the contact details you provide." />
          <FAQItem q="Which cities does JobPortal cover?" a="We currently cover 50+ major Indian cities including Mumbai, Bengaluru, Delhi NCR, Hyderabad, Pune, Chennai, Kolkata, and many more." />
        </div>
      </section>

      {/* 9. TRUST */}
      <section className="trust container">
        <div className="trust-grid">
          <div className="trust-images">
            <div className="stack-img img-lg" aria-hidden />
            <div className="stack-img img-sm" aria-hidden />
          </div>
          <div className="trust-copy">
            <h3>We're Only Working With The Best</h3>
            <p className="muted">We partner with top Indian and global organisations to ensure every match is high-quality and career-defining.</p>
            <ul className="trust-list">
              <li><IconCheckCircle size={16} color="var(--accent)" /> Quality Job Listings</li>
              <li><IconCheckCircle size={16} color="var(--accent)" /> AI Resume Builder</li>
              <li><IconCheckCircle size={16} color="var(--accent)" /> Top MNC Partners</li>
              <li><IconCheckCircle size={16} color="var(--accent)" /> Verified Employers</li>
            </ul>

            <div className="trust-logos" aria-hidden>
              <div className="logo-pill">Infosys</div>
              <div className="logo-pill">TCS</div>
              <div className="logo-pill">Wipro</div>
              <div className="logo-pill">HCL</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWS & BLOG */}
      <section className="news container">
        <h2 className="center">News and Blog</h2>
        <p className="muted center" style={{maxWidth:600,margin:'8px auto 24px'}}>Stay updated with the latest career tips and industry insights.</p>
        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-thumb" aria-hidden />
            <div className="blog-body">
              <span className="badge">Career Tips</span>
              <time className="small muted" dateTime="2026-01-10">Jan 10, 2026</time>
              <h4>How to crack product interviews at top Indian startups</h4>
              <a className="read-link" href="#">Read more →</a>
            </div>
          </article>
          <article className="blog-card">
            <div className="blog-thumb" aria-hidden />
            <div className="blog-body">
              <span className="badge">Industry</span>
              <time className="small muted" dateTime="2026-01-03">Jan 03, 2026</time>
              <h4>Top 10 highest paying tech roles in India for 2026</h4>
              <a className="read-link" href="#">Read more →</a>
            </div>
          </article>
          <article className="blog-card">
            <div className="blog-thumb" aria-hidden />
            <div className="blog-body">
              <span className="badge">Resume</span>
              <time className="small muted" dateTime="2025-12-20">Dec 20, 2025</time>
              <h4>5 resume mistakes that cost you interviews</h4>
              <a className="read-link" href="#">Read more →</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}