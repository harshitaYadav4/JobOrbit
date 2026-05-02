import React from 'react';
import { Link } from 'react-router-dom';
import { IconBookmark, IconMapPin, IconClock } from './Icons';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      {/* Top row: pill + bookmark */}
      <div className="job-card__top">
        <span className="job-card__pill">
          <IconClock size={12} color="var(--accent-600)" /> 10 min ago
        </span>
        <button className="job-card__bookmark" aria-label="Save job">
          <IconBookmark size={16} color="rgba(0,0,0,0.25)" />
        </button>
      </div>

      {/* Content row: logo + info + CTA */}
      <div className="job-card__body">
        <div className="job-card__logo">{job.company[0]}</div>
        <div className="job-card__info">
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__company">
            {job.company}
            <span className="job-card__dot">•</span>
            <IconMapPin size={13} color="var(--muted-text)" />
            {job.location}
          </p>
          <p className="job-card__excerpt">
            We are looking for a passionate professional to join our team and drive impactful projects. Strong communication and problem-solving skills required.
          </p>
          <div className="job-card__meta">
            <span className="job-card__tag">{job.type}</span>
            <span className="job-card__salary">{job.salary}</span>
          </div>
        </div>
        <div className="job-card__cta">
          <Link to={`/job/${job.id}`} className="btn-primary">Apply Job</Link>
          <Link to={`/job/${job.id}`} className="btn-secondary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;