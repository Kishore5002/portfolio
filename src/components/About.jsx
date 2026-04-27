import React from 'react';
import { User, MapPin, Phone, Mail, Calendar } from 'lucide-react';

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
          <div className="glass" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', fontFamily: 'Outfit' }}>Professional Summary</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              I am a dedicated MCA student at Hindusthan College, passionate about software development 
              and technology. With a strong foundation in C, Java, and Python, I focus on building 
              scalable and efficient web applications.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
              Based in Srivilliputhur, I am currently focused on honing my skills in modern web 
              development frameworks like React.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {details.map((detail, index) => (
              <div key={index} className="glass" style={{ padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderRadius: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--primary)', color: 'white', borderRadius: '0.75rem', display: 'flex' }}>
                  {detail.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '500' }}>{detail.label}</p>
                  <p style={{ fontWeight: '600', fontSize: '1.05rem' }}>{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
