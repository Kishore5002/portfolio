import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('data-theme', theme);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ padding: '1.5rem 0' }}>
      <div className="container flex-between">
        <a href="#home" className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Outfit' }}>
          Kishore M
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: '600', transition: '0.3s', fontSize: '0.95rem' }}>
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="social-icon" style={{ width: '40px', height: '40px' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-only">
          <button onClick={toggleTheme} className="social-icon" style={{ width: '40px', height: '40px' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="social-icon" style={{ width: '40px', height: '40px', background: 'var(--primary)', color: 'white' }}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '1.5rem',
              right: '1.5rem',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(15px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid var(--border)',
              zIndex: '999',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.2rem', fontWeight: '700', textAlign: 'center', padding: '0.5rem' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        .mobile-only { display: none; }
        @media (max-width: 968px) {
          .mobile-only { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
