import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
        
        <div className="grid-2">
          {/* Info Side */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="glass contact-info-card"
          >
            <h3 className="card-heading">Contact Details</h3>
            
            <div className="contact-details-list">
              <div className="contact-item">
                <div className="icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <p className="contact-label">Email Address</p>
                  <a href="mailto:kishoremunis34@gmail.com" className="contact-link">
                    kishoremunis34@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-text">
                  <p className="contact-label">Phone Number</p>
                  <a href="tel:9363300998" className="contact-link">
                    +91 9363300998
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <p className="contact-label">Location</p>
                  <p className="contact-link">
                    Srivilliputhur, Tamil Nadu.
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <LinkedinIcon size={20} />
                </div>
                <div className="contact-text">
                  <p className="contact-label">LinkedIn Profile</p>
                  <a href="https://www.linkedin.com/in/kishore-m-a90746316" target="_blank" rel="noreferrer" className="contact-link">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="glass contact-form-card"
          >
            <h3 className="card-heading">Send Message</h3>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Your Message" rows="5" className="form-input text-area"></textarea>
              <button className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-info-card, .contact-form-card { padding: 4rem; }
        .card-heading { font-size: 2.2rem; fontWeight: 800; marginBottom: 3rem; fontFamily: 'Outfit'; }
        .contact-details-list { display: flex; flex-direction: column; gap: 2rem; }
        .contact-item { display: flex; align-items: center; gap: 1.5rem; }
        .icon-box { min-width: 50px; height: 50px; background: var(--primary); color: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .contact-label { font-size: 0.85rem; color: var(--muted); fontWeight: 600; textTransform: uppercase; letterSpacing: 0.5px; }
        .contact-link { font-size: 1.15rem; fontWeight: 700; transition: 0.3s; }
        .contact-link:hover { color: var(--primary); }
        
        .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-input { width: 100%; padding: 1.2rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 1rem; color: var(--text); fontSize: 1rem; transition: 0.3s; }
        .form-input:focus { border-color: var(--primary); outline: none; background: rgba(255,255,255,0.08); }
        .text-area { resize: none; }
        .submit-btn { width: 100%; justify-content: center; padding: 1.2rem; }

        @media (max-width: 968px) {
          .contact-info-card, .contact-form-card { padding: 2.5rem; }
          .card-heading { font-size: 1.8rem; text-align: center; margin-bottom: 2rem; }
          .contact-item { text-align: left; }
          .form-row { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 480px) {
          .contact-link { font-size: 1rem; }
          .icon-box { min-width: 45px; height: 45px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
