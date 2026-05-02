import React, { useState } from 'react';

const rolesData = [
  [
    { title: 'Full Stack Developer', count: '22.5K+' },
    { title: 'Front End Developer', count: '5.4K+' },
    { title: 'Technical Lead', count: '10.1K+' },
    { title: 'Technical Architect', count: '5.9K+' },
    { title: 'Business Analyst', count: '4.8K+' },
    { title: 'Functional Consultant', count: '5.1K+' },
  ],
  [
    { title: 'Data Scientist', count: '8.2K+' },
    { title: 'DevOps Engineer', count: '6.7K+' },
    { title: 'Product Manager', count: '3.9K+' },
    { title: 'UI/UX Designer', count: '4.2K+' },
    { title: 'Cloud Architect', count: '3.5K+' },
    { title: 'QA Engineer', count: '7.1K+' },
  ],
  [
    { title: 'Backend Developer', count: '12.3K+' },
    { title: 'Mobile Developer', count: '4.6K+' },
    { title: 'Machine Learning Engineer', count: '3.1K+' },
    { title: 'Cybersecurity Analyst', count: '2.8K+' },
    { title: 'Database Administrator', count: '2.4K+' },
    { title: 'Systems Engineer', count: '5.3K+' },
  ],
];

const DiscoverRoles = () => {
  const [page, setPage] = useState(0);
  const totalPages = rolesData.length;

  const goNext = () => setPage((p) => (p + 1) % totalPages);
  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section className="discover-roles">
      <div className="container">
        <div className="discover-roles__inner">

          {/* Left — illustration + text */}
          <div className="discover-roles__left">
            <div className="discover-roles__illustration">
              <img
                src="/discover-roles.png"
                alt="Discover popular roles illustration"
                width="200"
                height="200"
              />
            </div>
            <h2 className="discover-roles__title">
              Discover jobs across<br />popular roles
            </h2>
            <p className="discover-roles__subtitle">
              Select a role and we'll show you relevant jobs for it!
            </p>
          </div>

          {/* Right — role cards grid + navigation */}
          <div className="discover-roles__right">
            <div className="discover-roles__grid-wrapper">
              <div
                className="discover-roles__grid"
                key={page}
              >
                {rolesData[page].map((role, i) => (
                  <button key={i} className="role-card">
                    <span className="role-card__title">{role.title}</span>
                    <span className="role-card__jobs">
                      {role.count} Jobs
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>

              {/* Next arrow */}
              <button
                className="discover-roles__arrow discover-roles__arrow--next"
                onClick={goNext}
                aria-label="Next roles"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Prev arrow */}
              <button
                className="discover-roles__arrow discover-roles__arrow--prev"
                onClick={goPrev}
                aria-label="Previous roles"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>

            {/* Dot pagination */}
            <div className="discover-roles__dots">
              {rolesData.map((_, i) => (
                <button
                  key={i}
                  className={`discover-roles__dot${i === page ? ' active' : ''}`}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverRoles;
