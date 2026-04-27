import React from 'react';
import { User, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const details = [
    { icon: <User size={18} />, label: 'Full Name', value: 'Kishore M' },
    { icon: <Mail size={18} />, label: 'Email', value: 'kishoremunis34@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone', value: '9363300998' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Srivilliputhur, TN' },
    { icon: <Calendar size={18} />, label: 'Education', value: 'MCA (2025-2027)' },
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About <span className="text-primary">Me</span></h2>
        <div className="grid-2">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="glass about-card"
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Professional Summary</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              I am a dedicated MCA student at Hindusthan College, passionate about software development 
              and technology. With a strong foundation in C, Java, and Python, I focus on building 
              scalable and efficient web applications.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Based in Srivilliputhur, I am currently focused on honing my skills in modern web 
              development frameworks like React and exploring the latest trends in software engineering.
            </p>
          </motion.div>
          
          <div className="about-details">
            {details.map((detail, index) => (
              <motion.div 
                key={index} 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass detail-item"
              >
                <div className="detail-icon">
                  {detail.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{detail.label}</p>
                  <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-card { padding: 4rem; }
        .about-details { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
        .detail-item { padding: 1.2rem 2rem; display: flex; align-items: center; gap: 1.5rem; border-radius: 1.2rem; width: 100%; }
        .detail-icon { min-width: 45px; height: 45px; background: var(--primary); color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        
        @media (max-width: 768px) {
          .about-card { padding: 2rem; text-align: center; }
          .about-details { gap: 0.8rem; }
          .detail-item { padding: 1rem; gap: 1rem; text-align: left; }
          .detail-icon { min-width: 40px; height: 40px; border-radius: 8px; }
          .detail-item p:last-child { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
