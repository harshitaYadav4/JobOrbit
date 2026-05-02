import React from 'react';

const CompanyCard = ({ logo, name, description, jobsCount }) => {
  return (
    <div className="company-card">
      <div className="company-logo">{logo}</div>
      <h3>{name}</h3>
      <p className="text-muted">{description || "At vero eos et accusamus et iusto odio dignissimos ducimus who blanditiis."}</p>
      <button className="tag">{jobsCount} Open Jobs</button>
    </div>
  );
};

export default CompanyCard;