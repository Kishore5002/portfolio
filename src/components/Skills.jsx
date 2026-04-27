import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Code2 size={24} />,
      skills: ['C', 'Java', 'Python', 'Web Dev (React)']
    },
    {
      title: 'Tools',
      icon: <PenTool size={24} />,
      skills: ['VS Code', 'Git/GitHub', 'Vite', 'DevTools']
    },
    {
      title: 'Soft Skills',
      icon: <MessageSquare size={24} />,
      skills: ['Communication', 'Problem Solving', 'Teamwork']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" style={{ backgroundColor: 'rgba(99, 102, 241, 0.03)' }}>
      <div className="container">
        <h2 className="section-title">My <span className="text-primary">Expertise</span></h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            display: 'flex', 
            gap: '2rem', 
            overflowX: 'auto', 
            padding: '1rem 0 3rem',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none'  /* IE and Edge */
          }}
          className="skills-swipe-container"
        >
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="glass" 
              style={{ 
                minWidth: '350px', 
                padding: '3rem', 
                flexShrink: 0,
                transition: '0.3s' 
              }}
            >
              <div style={{ 
                padding: '1.2rem', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '1.2rem', 
                width: 'fit-content', 
                marginBottom: '2rem',
                boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)'
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>
                {cat.title}
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {cat.skills.map((skill, sIndex) => (
                  <li key={sIndex} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--muted)', fontWeight: '600' }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--muted)', fontSize: '0.9rem', fontWeight: '500' }}>
          <span className="md-show">← Swipe to see more →</span>
        </div>
      </div>
      
      <style jsx>{`
        .skills-swipe-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari and Opera */
        }
        .md-show { display: none; }
        @media (max-width: 768px) {
          .md-show { display: block; }
          .skills-swipe-container { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
