import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconBriefcase, IconMenu, IconX } from './Icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar-wrapper${scrolled ? ' navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar container">
        <Link to="/" className="brand" aria-label="JobPortal Home">
          <div className="logo-mark"><IconBriefcase size={18} color="#fff" /></div>
          <span>JobPortal</span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'nav-active' : ''} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
          <Link to="/jobs" className={isActive('/jobs') ? 'nav-active' : ''} aria-current={isActive('/jobs') ? 'page' : undefined}>Jobs</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-active' : ''} aria-current={isActive('/about') ? 'page' : undefined}>About Us</Link>
          <Link to="/contact" className={isActive('/contact') ? 'nav-active' : ''} aria-current={isActive('/contact') ? 'page' : undefined}>Contact</Link>
        </div>

        <div className="actions">
          <Link to="/login" className="btn-ghost">Login</Link>
          <Link to="/register" className="btn-primary">Register</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <IconX size={22} color="#fff" /> : <IconMenu size={22} color="#fff" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer" role="menu">
          <Link to="/" className={isActive('/') ? 'nav-active' : ''} role="menuitem">Home</Link>
          <Link to="/jobs" className={isActive('/jobs') ? 'nav-active' : ''} role="menuitem">Jobs</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-active' : ''} role="menuitem">About Us</Link>
          <Link to="/contact" className={isActive('/contact') ? 'nav-active' : ''} role="menuitem">Contact</Link>
          <hr style={{border:'none',borderTop:'1px solid rgba(255,255,255,0.08)',margin:'8px 0'}} />
          <Link to="/login" role="menuitem">Login</Link>
          <Link to="/register" role="menuitem">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;