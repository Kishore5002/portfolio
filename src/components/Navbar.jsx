import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
            <a key={link.name} href={link.href} style={{ fontWeight: '500', transition: '0.3s' }}>
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="social-icon" style={{ width: '40px', height: '40px' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          {/* We will implement mobile menu specifically if needed, but for now let's fix desktop */}
        </div>
        <button className="md-hide" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'none' }}>
          <Menu />
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
        }
        .md-hide { display: none; }
        @media (max-width: 768px) { .md-hide { display: block; } }
      `}</style>
    </nav>
  );
};

export default Navbar;
