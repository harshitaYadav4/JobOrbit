import React from 'react';
import { IconGlobe, IconFileText, IconBuilding } from './Icons';

const Stats = () => {
  const statsData = [
    { icon: <IconGlobe size={28} color="var(--accent)" />, label: "Clients across India", value: "12k+", desc: "Trusted by professionals and companies in over 50 cities nationwide." },
    { icon: <IconFileText size={28} color="var(--accent)" />, label: "Active Resumes", value: "20k+", desc: "Thousands of candidates ready to be discovered by top employers." },
    { icon: <IconBuilding size={28} color="var(--accent)" />, label: "Companies Hiring", value: "18k+", desc: "Leading organisations trust our platform to find the right talent." }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div key={index} className="stats-card">
              <div className="stats-icon">{item.icon}</div>
              <div className="stats-number">{item.value}</div>
              <div className="stats-body">
                <h4 className="stats-title">{item.label}</h4>
                <p className="stats-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;