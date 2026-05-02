import { useEffect } from 'react';

/**
 * Sets document.title for SEO and tab identification.
 * @param {string} title — The page-specific title (e.g. "Browse Jobs")
 * @param {string} suffix — Appended after title (defaults to "JobPortal")
 */
const usePageTitle = (title, suffix = 'JobPortal') => {
  useEffect(() => {
    document.title = title ? `${title} — ${suffix}` : suffix;
    return () => { document.title = suffix; };
  }, [title, suffix]);
};

export default usePageTitle;
