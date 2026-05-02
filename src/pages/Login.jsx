import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMail, IconLock, IconEye, IconEyeOff, IconBriefcase } from '../Components/Icons';
import usePageTitle from '../hooks/usePageTitle';

const Login = () => {
  usePageTitle('Sign In');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="logo-mark"><IconBriefcase size={18} color="#fff" /></div>
          <span style={{fontWeight:700,fontSize:20,color:'var(--text)'}}>JobPortal</span>
        </div>

        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to access your dashboard and saved jobs.</p>

        <button className="google-btn" type="button">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            width="20"
            height="20"
          />
          Continue with Google
        </button>

        <div className="divider"><span>or sign in with email</span></div>

        <form className="auth-form">
          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="auth-input-wrapper">
              <IconMail size={16} color="#8a9290" />
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="auth-input-group">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <label>Password</label>
              <a href="#" className="auth-link" style={{fontSize:13}}>Forgot password?</a>
            </div>
            <div className="auth-input-wrapper">
              <IconLock size={16} color="#8a9290" />
              <input type={showPass ? 'text' : 'password'} placeholder="Enter your password" />
              <button type="button" className="auth-toggle-pass" onClick={() => setShowPass(!showPass)}>
                {showPass ? <IconEyeOff size={16} color="#8a9290" /> : <IconEye size={16} color="#8a9290" />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-submit">Sign In</button>
        </form>

        <p className="auth-footer-text">
          Don't have an account? <Link to="/register" className="auth-link">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;