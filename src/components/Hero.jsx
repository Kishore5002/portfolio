import React from 'react';
import profileImg from '../assets/kishore.jpeg';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = () => {
  return (
    <section id="home" className="animate-fade">
      <div className="container grid-2">
        <div className="hero-content">
          <h2 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Hello, I'm</h2>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
            Kishore <span className="text-gradient">M</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '500px', marginBottom: '2.5rem' }}>
            Aspiring MCA Student & Web Developer passionate about creating beautiful, 
            functional, and user-centric digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn glass" style={{ border: '1px solid var(--border)' }}>
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kishore-m-a90746316" target="_blank" rel="noreferrer" className="social-icon">
              <LinkedinIcon size={22} />
            </a>
            <a href="#" className="social-icon">
              <GithubIcon size={22} />
            </a>
            <a href="mailto:kishoremunis34@gmail.com" className="social-icon">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div style={{ position: 'absolute', inset: '-20px', background: 'var(--primary)', opacity: '0.1', filter: 'blur(50px)', borderRadius: '50%' }}></div>
          <img 
            src={profileImg} 
            alt="Kishore M" 
            className="hero-image"
            style={{ position: 'relative', zIndex: '1' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
