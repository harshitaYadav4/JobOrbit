import React from 'react';
import { Link } from 'react-router-dom';
import { IconSearch } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('Page Not Found');

  return (
    <div className="not-found">
      <div className="not-found__inner">
        <div className="not-found__code">404</div>
        <div className="not-found__icon">
          <IconSearch size={48} color="var(--accent)" />
        </div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/jobs" className="btn-secondary">Browse Jobs</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
