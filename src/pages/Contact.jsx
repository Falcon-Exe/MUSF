import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { contactData } from '../data/contact';
import { useContactForm } from '../hooks/useContactForm';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';

const Contact = () => {
  const {
    isFormSubmitted,
    isSubmitting,
    handleContactSubmit,
    resetFormStatus
  } = useContactForm(contactData.formEndpoint);

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
                  <h4>{contactData.address.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{contactData.address.details}</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon"><FaPhoneAlt size={24} /></div>
                <div className="contact-text">
                  <h4>{contactData.phone.title}</h4>
                  <p>
                    {contactData.phone.numbers.map((num, idx) => (
                      <React.Fragment key={idx}>
                        <a href={num.link}>{num.value}</a> ({num.label})
                        {idx < contactData.phone.numbers.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon"><FaEnvelope size={24} /></div>
                <div className="contact-text">
                  <h4>{contactData.email.title}</h4>
                  <p>
                    {contactData.email.addresses.map((mail, idx) => (
                      <React.Fragment key={idx}>
                        <a href={mail.link}>{mail.value}</a>
                        {idx < contactData.email.addresses.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <div className="map-container" style={{ marginTop: '2rem' }}>
              <iframe
                src={contactData.address.mapUrl}
                width="100%"
                height="350"
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
              {isFormSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out to us. We will get back to you shortly.</p>
                  <button onClick={resetFormStatus} className="new-message-btn">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-green)' }}>Send a Message</h3>
                  <form action={contactData.formEndpoint} method="POST" className="premium-contact-form" onSubmit={handleContactSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" className="form-control" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" className="form-control" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" className="form-control" rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn" style={{ width: '100%' }} disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
