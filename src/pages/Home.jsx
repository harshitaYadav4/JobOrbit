import React from 'react';
import Hero from '../Components/Hero';
import Stats from '../Components/Stats';
import CategoryCard from '../Components/CategoryCard';
import JobCard from '../Components/JobCard';
import DiscoverRoles from '../Components/DiscoverRoles';
import { IconTractor, IconScale, IconShoppingBag, IconHardHat } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('Find Your Dream Job');
  const jobs = [
    { id: 1, title: 'Senior Software Engineer', company: 'Infosys', location: 'Bengaluru, Karnataka', type: 'Full time', salary: '₹18L-₹24L' },
    { id: 2, title: 'Product Manager', company: 'Flipkart', location: 'Mumbai, Maharashtra', type: 'Full time', salary: '₹22L-₹30L' },
    { id: 3, title: 'Data Analyst', company: 'TCS', location: 'Hyderabad, Telangana', type: 'Part time', salary: '₹8L-₹12L' },
  ];

  return (
    <main>
      <Hero />

      {/* Recent Jobs */}
      <div className="container">
        <section className="jobs-section">
          <div className="jobs-card">
            <div className="jobs-header">
              <div>
                <h2>Recent Jobs Available</h2>
                <p style={{marginTop:8,color:'#9ca3a2',fontSize:14}}>Showing 1-{jobs.length} of {jobs.length} results</p>
              </div>
              <div style={{display:'flex',gap:12,alignItems:'center'}}>
                <select className="sort-select">
                  <option>Sort by: Latest</option>
                  <option>Sort by: Oldest</option>
                  <option>Sort by: Salary</option>
                </select>
                <button className="btn-primary">View All</button>
              </div>
            </div>

            <div className="jobs-list">
              {jobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </div>
        </section>
      </div>

      {/* Browse by Category */}
      <div className="container" style={{marginTop:32}}>
        <section style={{paddingTop:32,paddingBottom:16}}>
          <h2 className="center" style={{fontSize:28,fontWeight:800,color:'#fff',marginBottom:14}}>Browse by Category</h2>
          <p className="center" style={{maxWidth:680,margin:'0 auto 8px',color:'#9ca3a2',fontSize:16,lineHeight:1.6}}>Explore popular job categories to find roles that match your skills.</p>
          <div className="category-grid">
            <CategoryCard icon={<IconTractor size={24} color="var(--accent)" />} title="Agriculture" count="125 Jobs" />
            <CategoryCard icon={<IconScale size={24} color="var(--accent)" />} title="Manufacturing" count="204 Jobs" />
            <CategoryCard icon={<IconShoppingBag size={24} color="var(--accent)" />} title="Commerce" count="315 Jobs" />
            <CategoryCard icon={<IconHardHat size={24} color="var(--accent)" />} title="Construction" count="440 Jobs" />
          </div>
        </section>
      </div>

      {/* Discover Popular Roles */}
      <DiscoverRoles />

      {/* Stats */}
      <Stats />
    </main>
  );
};

export default Home;