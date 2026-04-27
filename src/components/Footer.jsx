import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '5rem 0', borderTop: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div>
          <a href="#home" className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Outfit' }}>
            Kishore M
          </a>
          <p style={{ color: 'var(--muted)', marginTop: '0.5rem', fontWeight: '500' }}>
            Built with passion using React and modern CSS.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#about" style={{ fontSize: '0.95rem', fontWeight: '600', transition: '0.3s' }}>About</a>
          <a href="#projects" style={{ fontSize: '0.95rem', fontWeight: '600', transition: '0.3s' }}>Projects</a>
          <a href="#skills" style={{ fontSize: '0.95rem', fontWeight: '600', transition: '0.3s' }}>Skills</a>
          <a href="#contact" style={{ fontSize: '0.95rem', fontWeight: '600', transition: '0.3s' }}>Contact</a>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '1rem' }}>
          &copy; {new Date().getFullYear()} Kishore M. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
