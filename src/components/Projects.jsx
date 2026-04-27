import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aquariumImg from '../assets/aquarium.png';
import mobileImg from '../assets/mobile.png';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Aquarium Fish Selling Website',
      description: 'A dedicated platform for aquarium enthusiasts to browse and purchase exotic fish. Features include a curated gallery and search filters.',
      image: aquariumImg,
      tags: ['HTML', 'CSS', 'JS'],
    },
    {
      title: 'Mobile Sales Website',
      description: 'A modern e-commerce solution for selling smartphones. Focuses on high-performance product displays.',
      image: mobileImg,
      tags: ['React', 'Modern UI'],
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>
        
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass"
              style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '0' }}
            >
              {/* Image Side */}
              <div style={{ height: '100%', overflow: 'hidden' }}>
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Content Side */}
              <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem' }}>
                  {projects[currentIndex].tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.4rem 0.8rem', background: 'var(--primary)', color: 'white', borderRadius: '0.5rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                  {projects[currentIndex].title}
                </h3>
                <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  {projects[currentIndex].description}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href="#" className="social-icon" style={{ borderRadius: '50%' }}>
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="social-icon" style={{ borderRadius: '50%' }}>
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
            <button onClick={prevProject} className="social-icon" style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', borderRadius: '50%' }}>
              <ChevronLeft size={30} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {projects.map((_, index) => (
                <div 
                  key={index} 
                  style={{ 
                    width: index === currentIndex ? '30px' : '10px', 
                    height: '10px', 
                    background: index === currentIndex ? 'var(--primary)' : 'var(--border)', 
                    borderRadius: '5px',
                    transition: '0.3s'
                  }}
                ></div>
              ))}
            </div>
            <button onClick={nextProject} className="social-icon" style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', borderRadius: '50%' }}>
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .glass { grid-template-columns: 1fr !important; }
          .glass div:first-child { height: 250px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
