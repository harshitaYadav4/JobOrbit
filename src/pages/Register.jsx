import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconUser, IconMail, IconLock, IconEye, IconEyeOff, IconBriefcase } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const Register = () => {
  usePageTitle('Create Account');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="logo-mark"><IconBriefcase size={18} color="#fff" /></div>
          <span style={{fontWeight:700,fontSize:20,color:'var(--text)'}}>JobPortal</span>
        </div>

        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join thousands of professionals finding their dream jobs.</p>

        <button className="google-btn" type="button">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            width="20"
            height="20"
          />
          Sign up with Google
        </button>

        <div className="divider"><span>or register with email</span></div>

        <form className="auth-form">
          <div className="auth-input-group">
            <label>Full Name</label>
            <div className="auth-input-wrapper">
              <IconUser size={16} color="#8a9290" />
              <input type="text" placeholder="Enter your full name" />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="auth-input-wrapper">
              <IconMail size={16} color="#8a9290" />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <div className="auth-input-wrapper">
              <IconLock size={16} color="#8a9290" />
              <input type={showPass ? 'text' : 'password'} placeholder="Create a password" />
              <button type="button" className="auth-toggle-pass" onClick={() => setShowPass(!showPass)}>
                {showPass ? <IconEyeOff size={16} color="#8a9290" /> : <IconEye size={16} color="#8a9290" />}
              </button>
            </div>
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <div className="auth-input-wrapper">
              <IconLock size={16} color="#8a9290" />
              <input type={showPass ? 'text' : 'password'} placeholder="Confirm your password" />
            </div>
          </div>

          <button type="submit" className="auth-submit">Create Account</button>
        </form>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
