import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { IconBriefcase, IconClock, IconMapPin, IconDollar, IconFileText } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const jobsData = {
  1: { title: 'Senior Software Engineer', company: 'Infosys', location: 'Bengaluru, Karnataka', type: 'Full Time', salary: '₹18L - ₹24L', experience: '5+ Years' },
  2: { title: 'Product Manager', company: 'Flipkart', location: 'Mumbai, Maharashtra', type: 'Full Time', salary: '₹22L - ₹30L', experience: '4+ Years' },
  3: { title: 'Data Analyst', company: 'TCS', location: 'Hyderabad, Telangana', type: 'Part Time', salary: '₹8L - ₹12L', experience: '2+ Years' },
  4: { title: 'UI/UX Designer', company: 'Zomato', location: 'Gurugram, Haryana', type: 'Full Time', salary: '₹14L - ₹20L', experience: '3+ Years' },
  5: { title: 'DevOps Engineer', company: 'Wipro', location: 'Pune, Maharashtra', type: 'Full Time', salary: '₹16L - ₹22L', experience: '4+ Years' },
  6: { title: 'Marketing Manager', company: 'Swiggy', location: 'Bengaluru, Karnataka', type: 'Full Time', salary: '₹12L - ₹18L', experience: '3+ Years' },
  7: { title: 'Backend Developer', company: 'Razorpay', location: 'Bengaluru, Karnataka', type: 'Full Time', salary: '₹20L - ₹28L', experience: '5+ Years' },
  8: { title: 'Business Analyst', company: 'Deloitte India', location: 'Delhi NCR', type: 'Full Time', salary: '₹10L - ₹15L', experience: '2+ Years' },
};

const JobDetails = () => {
  const { id } = useParams();
  const job = jobsData[id] || jobsData[1]; // fallback to first job

  usePageTitle(job.title);

  return (
    <div style={{paddingBottom:64}}>
      <div className="page-title" style={{paddingTop:40,paddingBottom:40}}>
        <h2 style={{color:'#fff',fontSize:36}}>Job Details</h2>
        <p style={{color:'rgba(255,255,255,0.7)',fontSize:15,marginTop:8}}>Review the position and apply today</p>
      </div>

      <div className="container" style={{paddingBottom:40}}>
        <div className="job-details-layout">

          {/* Main content */}
          <div className="card" style={{padding:'32px 28px',borderRadius:18}}>
            <h2 style={{fontSize:22,fontWeight:800,marginBottom:14,marginTop:0,color:'var(--text)'}}>Job Description</h2>
            <p style={{color:'var(--muted-text)',lineHeight:1.7,fontSize:15,marginBottom:24}}>
              We are looking for a {job.title} to join our team at {job.company} in {job.location}.
              You will be responsible for building scalable systems, collaborating with cross-functional teams, and driving engineering excellence.
            </p>

            <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--text)'}}>Key Responsibilities</h3>
            <ul style={{marginLeft:18,lineHeight:2,color:'var(--muted-text)',fontSize:15}}>
              <li>Design and implement high-performance, scalable APIs and microservices.</li>
              <li>Collaborate with product managers and designers to deliver user-centric features.</li>
              <li>Conduct code reviews and mentor junior developers.</li>
              <li>Drive technical decisions and contribute to system architecture.</li>
            </ul>

            <h3 style={{fontSize:18,fontWeight:700,marginTop:28,marginBottom:14,color:'var(--text)'}}>Qualifications</h3>
            <ul style={{marginLeft:18,lineHeight:2,color:'var(--muted-text)',fontSize:15}}>
              <li>B.Tech / M.Tech in Computer Science or equivalent.</li>
              <li>{job.experience} of experience in the relevant domain.</li>
              <li>Proficiency in Java, Python, or Node.js.</li>
              <li>Experience with cloud platforms (AWS / GCP / Azure).</li>
            </ul>

            <h3 style={{fontSize:18,fontWeight:700,marginTop:28,marginBottom:14,color:'var(--text)'}}>Required Skills</h3>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">AWS</span>
              <span className="tag">Microservices</span>
              <span className="tag">System Design</span>
              <span className="tag">Agile</span>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{position:'sticky',top:80}}>
            <div className="card" style={{padding:'28px 24px',borderRadius:18,border:'2px solid var(--muted)'}}>
              <h3 style={{fontWeight:700,fontSize:18,marginTop:0,marginBottom:20,color:'var(--text)'}}>Job Overview</h3>
              <div style={{display:'flex',flexDirection:'column',gap:16}}>
                <div className="overview-item">
                  <span className="overview-label"><IconFileText size={15} color="var(--accent)" /> Job Title</span>
                  <strong>{job.title}</strong>
                </div>
                <div className="overview-item">
                  <span className="overview-label"><IconClock size={15} color="var(--accent)" /> Experience</span>
                  <strong>{job.experience}</strong>
                </div>
                <div className="overview-item">
                  <span className="overview-label"><IconMapPin size={15} color="var(--accent)" /> Location</span>
                  <strong>{job.location}</strong>
                </div>
                <div className="overview-item">
                  <span className="overview-label"><IconBriefcase size={15} color="var(--accent)" /> Type</span>
                  <strong>{job.type}</strong>
                </div>
                <div className="overview-item" style={{borderBottom:'none',paddingBottom:0}}>
                  <span className="overview-label"><IconDollar size={15} color="var(--accent)" /> Salary</span>
                  <strong style={{color:'var(--accent)'}}>{job.salary}</strong>
                </div>
              </div>
              <button className="btn-primary" style={{width:'100%',marginTop:24,padding:'14px 24px',fontSize:16,fontWeight:700,borderRadius:14}}>
                Apply Now
              </button>
              <Link to="/jobs" className="btn-secondary" style={{width:'100%',marginTop:10,padding:'12px 24px',fontSize:14,borderRadius:14,textAlign:'center',display:'block',boxSizing:'border-box'}}>
                Back to Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;