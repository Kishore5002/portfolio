import React from 'react';
import profileImg from '../assets/kishore.jpeg';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home">
      <div className="container grid-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h2 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '700' }}>Hello, I'm</h2>
          <h1 className="hero-title" style={{ fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
            Kishore <span className="text-gradient">M</span>
          </h1>
          <p className="hero-description" style={{ color: 'var(--muted)', margin: '0 auto 2.5rem', fontSize: '1.2rem' }}>
            Aspiring MCA Student & Web Developer passionate about creating beautiful, 
            functional, and user-centric digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }} className="hero-btns">
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-image-container"
        >
          <div style={{ position: 'absolute', inset: '-20px', background: 'var(--primary)', opacity: '0.1', filter: 'blur(50px)', borderRadius: '50%' }}></div>
          <img 
            src={profileImg} 
            alt="Kishore M" 
            className="hero-image"
            style={{ position: 'relative', zIndex: '1' }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .hero-title { font-size: 5rem; }
        .hero-description { max-width: 550px; }
        .hero-btns { justify-content: flex-start; }
        
        @media (max-width: 968px) {
          .hero-title { font-size: 3.5rem; margin-top: 1rem; }
          .hero-description { max-width: 100%; margin-bottom: 2.5rem; }
          .hero-btns { justify-content: center; gap: 1.5rem !important; }
          .hero-content { order: 2; text-align: center; }
          .hero-image-container { order: 1; margin-bottom: 3rem; }
        }
        
        @media (max-width: 480px) {
          .hero-title { font-size: 2.8rem; }
          .hero-description { font-size: 1rem; }
          .hero-btns { flex-direction: column; width: 100%; }
          .btn { width: 100%; justify-content: center; padding: 1rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
