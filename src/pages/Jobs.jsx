import React, { useState } from 'react';
import JobCard from "../Components/JobCard";
import { IconSearch, IconMapPin } from "../Components/Icons";
import usePageTitle from '../hooks/usePageTitle';

const allJobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'Infosys', location: 'Bengaluru, Karnataka', type: 'Full time', salary: '₹18L-₹24L' },
  { id: 2, title: 'Product Manager', company: 'Flipkart', location: 'Mumbai, Maharashtra', type: 'Full time', salary: '₹22L-₹30L' },
  { id: 3, title: 'Data Analyst', company: 'TCS', location: 'Hyderabad, Telangana', type: 'Part time', salary: '₹8L-₹12L' },
  { id: 4, title: 'UI/UX Designer', company: 'Zomato', location: 'Gurugram, Haryana', type: 'Full time', salary: '₹14L-₹20L' },
  { id: 5, title: 'DevOps Engineer', company: 'Wipro', location: 'Pune, Maharashtra', type: 'Full time', salary: '₹16L-₹22L' },
  { id: 6, title: 'Marketing Manager', company: 'Swiggy', location: 'Bengaluru, Karnataka', type: 'Full time', salary: '₹12L-₹18L' },
  { id: 7, title: 'Backend Developer', company: 'Razorpay', location: 'Bengaluru, Karnataka', type: 'Full time', salary: '₹20L-₹28L' },
  { id: 8, title: 'Business Analyst', company: 'Deloitte India', location: 'Delhi NCR', type: 'Full time', salary: '₹10L-₹15L' },
];

const locations = ['All Locations', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Pune', 'Gurugram'];
const types = ['All Types', 'Full time', 'Part time', 'Contract', 'Remote'];

export default function Jobs() {
  usePageTitle('Browse Jobs');
  const [search, setSearch] = useState('');
  const [locFilter, setLocFilter] = useState('All Locations');
  const [typeFilter, setTypeFilter] = useState('All Types');

  const filtered = allJobs.filter(job => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
    const matchLoc = locFilter === 'All Locations' || job.location.includes(locFilter);
    const matchType = typeFilter === 'All Types' || job.type === typeFilter;
    return matchSearch && matchLoc && matchType;
  });

  return (
    <div style={{paddingBottom:64}}>
      <div className="page-title" style={{paddingTop:40,paddingBottom:40}}>
        <h2 style={{color:'#fff'}}>Browse Jobs</h2>
        <p style={{color:'rgba(255,255,255,0.7)',fontSize:15,marginTop:8}}>Find opportunities that match your skills</p>
      </div>

      <div className="container">
        {/* Search and filters bar */}
        <div className="jobs-filter-bar">
          <div className="jobs-search-input">
            <IconSearch size={16} color="#8a9290" />
            <input
              type="text"
              placeholder="Search by title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select value={locFilter} onChange={(e) => setLocFilter(e.target.value)} className="jobs-filter-select">
            {locations.map(l => <option key={l}>{l}</option>)}
          </select>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="jobs-filter-select">
            {types.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>

        {/* Result count */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'24px 0 20px'}}>
          <p style={{color:'#9ca3a2',fontSize:14,margin:0}}>
            Showing <strong style={{color:'#fff'}}>{filtered.length}</strong> of {allJobs.length} jobs
          </p>
          <select className="sort-select">
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
            <option>Sort by: Salary (High)</option>
          </select>
        </div>

        {/* Job list */}
        <div className="content-column" style={{gap:20}}>
          {filtered.length > 0 ? (
            filtered.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="empty-state">
              <IconSearch size={48} color="var(--muted-text)" />
              <h3>No jobs found</h3>
              <p>Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
