import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';

const Contact = () => {
  return (
    <div className="contact-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Contact Us</h1>
          <p className="page-subtitle text-white">We'd love to hear from you. Get in touch with MUSF.</p>
        </div>
      </header>

      <div className="container section">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-detail">
                <div className="contact-icon"><FaMapMarkerAlt size={24} /></div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <p>Majlis Umariyya Wafy College<br />Puramannur, Malappuram<br />Kerala, PIN: 676511</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon"><FaPhoneAlt size={24} /></div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 82899 49746<br />+91 75599 76086</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon"><FaEnvelope size={24} /></div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:musfpuramannur@gmail.com">musfpuramannur@gmail.com</a><br />
                    <a href="mailto:musf.prd@gmail.com">musf.prd@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="map-container" style={{ marginTop: '2rem' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.423986960863!2d76.012356!3d10.852445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ba000ecfb49b%3A0x6e9a66d6d4a0b2d5!2sMajlis%20Wafy%20College%20Puramannur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-green)' }}>Send a Message</h3>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" className="form-control" placeholder="Subject of your message" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" rows="5" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
