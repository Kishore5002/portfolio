import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
        
        <div className="grid-2">
          {/* Info Side */}
          <div className="glass" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2.5rem', fontFamily: 'Outfit' }}>Contact Details</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ background: 'var(--primary)', color: 'white' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Email Address</p>
                  <a href="mailto:kishoremunis34@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '700', hover: { color: 'var(--primary)' } }}>
                    kishoremunis34@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ background: 'var(--primary)', color: 'white' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Phone Number</p>
                  <a href="tel:9363300998" style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                    +91 9363300998
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ background: 'var(--primary)', color: 'white' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Location</p>
                  <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                    Srivilliputhur, Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ background: 'var(--primary)', color: 'white' }}>
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>LinkedIn Profile</p>
                  <a href="https://www.linkedin.com/in/kishore-m-a90746316" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2.5rem', fontFamily: 'Outfit' }}>Send Message</h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.8rem', color: 'var(--text)' }}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.8rem', color: 'var(--text)' }}
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.8rem', color: 'var(--text)' }}
              />
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.8rem', color: 'var(--text)', resize: 'none' }}
              ></textarea>
              <button className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
