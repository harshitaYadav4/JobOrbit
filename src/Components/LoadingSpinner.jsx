import React from 'react';

/**
 * Full-page loading spinner used as Suspense fallback
 * while lazy-loaded page chunks are being fetched.
 */
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="loading-spinner__ring" />
    <p className="loading-spinner__text">Loading…</p>
  </div>
);

export default LoadingSpinner;
