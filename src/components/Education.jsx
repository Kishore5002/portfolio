import React from 'react';
import { GraduationCap, Calendar, BookOpen, School } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      type: 'Post Graduation',
      course: 'Master of Computer Applications (MCA)',
      institution: 'Hindusthan College of Engineering and Technology',
      period: '2025 — 2027',
      score: '85%',
      icon: <GraduationCap size={20} />,
      description: 'Currently pursuing advanced studies in software development, focusing on full-stack architecture and emerging technologies.'
    },
    {
      type: 'Under Graduation',
      course: 'Bachelor of Computer Applications (BCA)',
      institution: 'Ayya Nadar Janaki Ammal College',
      period: '2022 — 2025',
      score: '75%',
      icon: <BookOpen size={20} />,
      description: 'Completed foundational studies in computer science, programming logic, and database management systems.'
    },
    {
      type: 'Schooling',
      course: 'Higher Secondary & Secondary Education',
      institution: 'VNUP Kaleeswari Hr Sec School',
      period: '2020 — 2022',
      score: '10th: 70%, 11th: 75%, 12th: 72%',
      icon: <School size={20} />,
      description: 'Completed secondary and higher secondary education with a strong focus on core academic subjects.'
    }
  ];

  return (
    <section id="education" style={{ backgroundColor: 'rgba(99, 102, 241, 0.03)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="section-title">Academic <span className="text-primary">Journey</span></h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                {item.icon}
              </div>
              
              <div className="glass timeline-content">
                <div className="timeline-header">
                  <div className="header-main">
                    <span className="edu-type">{item.type}</span>
                    <h3 className="edu-course">{item.course}</h3>
                  </div>
                  <div className="header-meta">
                    <span className="edu-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span className="edu-score">Score: {item.score}</span>
                  </div>
                </div>
                
                <h4 className="edu-institution">{item.institution}</h4>
                <p className="edu-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-container { position: relative; display: flex; flex-direction: column; gap: 3rem; }
        .timeline-line { position: absolute; left: 25px; top: 0; bottom: 0; width: 2px; background: var(--primary); opacity: 0.2; }
        .timeline-item { position: relative; padding-left: 4.5rem; }
        .timeline-marker { position: absolute; left: 0; top: 0; background: var(--primary); color: white; padding: 0.8rem; borderRadius: 50%; display: flex; zIndex: 1; boxShadow: 0 0 0 5px rgba(99, 102, 241, 0.1); }
        .timeline-content { padding: 3rem; }
        .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; }
        .edu-type { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); }
        .edu-course { font-size: 1.8rem; font-weight: 800; font-family: 'Outfit'; margin-top: 0.5rem; }
        .header-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; }
        .edu-period { padding: 0.4rem 1rem; background: rgba(99, 102, 241, 0.1); color: var(--primary); borderRadius: 2rem; fontSize: 0.85rem; fontWeight: 700; display: flex; alignItems: center; gap: 0.5rem; }
        .edu-score { font-size: 1.1rem; fontWeight: 800; color: var(--text); }
        .edu-institution { font-size: 1.2rem; color: var(--muted); fontWeight: 600; marginBottom: 1.5rem; }
        .edu-desc { color: var(--muted); lineHeight: 1.7; fontSize: 1.1rem; }

        @media (max-width: 768px) {
          .timeline-item { padding-left: 3.5rem; }
          .timeline-marker { padding: 0.6rem; }
          .timeline-line { left: 19px; }
          .timeline-content { padding: 2rem; }
          .edu-course { font-size: 1.4rem; }
          .header-meta { align-items: flex-start; }
          .edu-score { font-size: 1rem; }
          .edu-institution { font-size: 1rem; }
          .edu-desc { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Education;
