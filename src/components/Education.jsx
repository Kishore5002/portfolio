import React from 'react';
import { GraduationCap, Calendar, BookOpen, School } from 'lucide-react';

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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          {/* Vertical line for the timeline */}
          <div style={{ position: 'absolute', left: '25px', top: '0', bottom: '0', width: '2px', background: 'var(--primary)', opacity: '0.2' }}></div>
          
          {educationData.map((item, index) => (
            <div key={index} style={{ position: 'relative', paddingLeft: '4rem' }}>
              {/* Timeline marker */}
              <div style={{ 
                position: 'absolute', 
                left: '0', 
                top: '0', 
                background: 'var(--primary)', 
                color: 'white', 
                padding: '0.8rem', 
                borderRadius: '50%', 
                display: 'flex',
                zIndex: '1',
                boxShadow: '0 0 0 5px rgba(99, 102, 241, 0.1)'
              }}>
                {item.icon}
              </div>
              
              <div className="glass" style={{ padding: '2.5rem', transition: '0.3s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary)' }}>
                      {item.type}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '800', fontFamily: 'Outfit', marginTop: '0.5rem' }}>
                      {item.course}
                    </h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <span style={{ padding: '0.4rem 1rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text)' }}>
                      Score: {item.score}
                    </span>
                  </div>
                </div>
                
                <h4 style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  {item.institution}
                </h4>
                
                <p style={{ color: 'var(--muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
