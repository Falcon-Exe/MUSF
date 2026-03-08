import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBook, FaHandsHelping, FaMicrophone, FaUserGraduate, FaSitemap, FaCalendarCheck, FaMedal, FaInstagram, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { leadershipData } from '../data/leaders';
import { announcementData } from '../data/announcements';
import { contactData } from '../data/contact';
import { activityData } from '../data/activities';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatCounter from '../components/StatCounter';
import '../styles/Home.css';

const Home = () => {
  useScrollReveal();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { id: 1, icon: <FaUserGraduate size={32} />, label: "Active Students", num: 150, suffix: "+" },
    { id: 2, icon: <FaSitemap size={32} />, label: "Sub Committees", num: 10, suffix: "+" },
    { id: 3, icon: <FaCalendarCheck size={32} />, label: "Intellectual Conclaves", num: 4, suffix: "+" },
    { id: 4, icon: <FaMedal size={32} />, label: "Language Clubs", num: 3, suffix: "+" }
  ];

  const instagramURL = "https://www.instagram.com/musf_puramannur";

  const activities = activityData.slice(0, 4);



  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Try fetching real instagram posts
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const token = import.meta.env.VITE_INSTAGRAM_TOKEN;

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${token}`
        );
        const data = await response.json();

        if (data.data) {
          const formattedPosts = data.data.slice(0, 6).map((post, i) => ({
            id: post.id,
            url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
            alt: post.caption ? post.caption.substring(0, 40) : `Instagram post ${i + 1}`,
            link: post.permalink
          }));
          setInstagramPosts(formattedPosts);
        } else {
          setError('Failed to load real posts.');
        }
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const getInitialStyle = (name) => {
    const gradients = [
      'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Indigo-Purple
      'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)', // Blue-Teal
      'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', // Amber-Red
      'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', // Emerald-Blue
      'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'  // Pink-Violet
    ];
    // Simple hash to consistently pick a gradient based on name
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;
    return { background: gradients[index] };
  };

  return (
    <div className="home">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        {/* Subtle geometric pattern overlay */}
        <div className="hero-pattern"></div>
        <div className="container hero-container fade-in-up">
          <h1 className="hero-title">
            <span className="text-accent">Majlis Umariyya</span><br />
            Students Federation
          </h1>
          <p className="hero-tagline">"Serving Students with Knowledge, Unity & Leadership"</p>
          <div className="hero-buttons">
            <Link to="/activities" className="btn btn-primary hero-btn-primary">Explore Activities</Link>
            <Link to="/about" className="btn hero-btn-secondary">About MUSF</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="stats section reveal-on-scroll">
        <div className="stats-pattern"></div>
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            {stats.map(stat => (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <h3 className="stat-count">
                  <StatCounter endValue={stat.num} suffix={stat.suffix} />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="about section reveal-on-scroll">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/college.png" alt="MUSF Students" className="about-img" />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <div className="about-card">
              <h3>Vision</h3>
              <p>Strengthen the upcoming generation with ideal youth and empower the muslim society.</p>
            </div>
            <div className="about-card">
              <h3>Mission</h3>
              <p>Mould the students to face the fast moving world by equipping them with the qualities of Critical Thinking, Public Speaking, Content Writing, and Problem Solving, and prepare the students to overcome the various challenges in the modern world.</p>
            </div>
            <div className="about-card values-card">
              <h3>Values</h3>
              <ul>
                <li>Knowledge</li>
                <li>Unity</li>
                <li>Service</li>
                <li>Discipline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="leadership section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Leadership</h2>
          <div className="grid grid-4 leaders-grid">
            {leadershipData.executive.slice(0, 6).map(leader => (
              <div key={leader.id} className="leader-card flex-col">
                <div
                  className={`leader-photo-wrapper ${!leader.image ? 'image-failed' : ''}`}
                  style={!leader.image ? getInitialStyle(leader.name) : {}}
                >
                  {leader.image && (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      className="leader-photo"
                      onError={(e) => {
                        e.target.classList.add('hide-image');
                        e.target.parentElement.classList.add('image-failed');
                      }}
                    />
                  )}
                  <div className="leader-initials">
                    {leader.name.charAt(0)}
                  </div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div >
      </section >

      {/* 5. Activities Section */}
      < section className="activities section reveal-on-scroll" >
        <div className="container">
          <h2 className="section-title">Activities</h2>
          <div className="activities-grid">
            {activities.map((act, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">{act.icon}</div>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 6. Announcements Section */}
      < section className="announcements section reveal-on-scroll" >
        <div className="container">
          <h2 className="section-title">Latest Announcements</h2>
          <div className="announcement-container">
            {announcementData.map((item, idx) => (
              <Link to="/announcements" key={item.id} className="announcement-card-link">
                <div className="announcement-card-item">
                  <div className="announcement-date">
                    <span className="day">{item.day}</span>
                    <span className="month">{item.month}</span>
                  </div>
                  <div className="announcement-content-info">
                    <span className="announcement-category">{item.type}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="announcement-arrow">&rarr;</div>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/announcements" className="view-all-link">View all announcements &rarr;</Link>
        </div>
      </section >

      {/* 7. Event Gallery */}
      < section className="gallery section reveal-on-scroll" >
        <div className="container">
          <h2 className="section-title">Event Gallery</h2>
          <div className="home-gallery-grid">
            {instagramPosts.map((item, idx) => (
              <a
                href={item.link || instagramURL}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="home-gallery-item-card"
              >
                <div className="gallery-img-container">
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-missing');
                    }}
                  />
                  <div className="gallery-placeholder-text">
                    Post {idx + 1}
                  </div>
                </div>
                <div className="gallery-overlay">
                  <div className="insta-overlay-content">
                    <FaInstagram size={30} />
                    <span>@musf_puramannur</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section >

      {/* 9. Call to Action */}
      < section className="cta section reveal-on-scroll" >
        <div className="container cta-container">
          <h2>Join the Journey of Knowledge and Leadership</h2>
          <p>Become part of MUSF initiatives.</p>
          <Link to="/contact" className="btn btn-primary cta-btn">Contact Us</Link>
        </div>
      </section >

      {/* 10. Contact Section */}
      < section className="contact section reveal-on-scroll" >
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card-wrapper">
            <div className="contact-grid">
              <div className="contact-info">
                <h3 className="contact-college-name">Majlis Umariyya Wafy College</h3>
                <div className="contact-detail-item">
                  <strong>Email:</strong>
                  <a href={contactData.email.addresses[0].link}>{contactData.email.addresses[0].value}</a>
                </div>
                <div className="contact-detail-item">
                  <strong>Phone:</strong>
                  <a href={contactData.phone.numbers[2].link}>{contactData.phone.numbers[2].value}</a>
                </div>
                <div className="map-container">
                  <iframe
                    src={contactData.address.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Majlis Wafy College Location"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; geolocation"
                  ></iframe>
                </div>
              </div>
              <div className="contact-form-wrapper">
                {isFormSubmitted ? (
                  <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out to us. We will get back to you shortly.</p>
                    <button onClick={() => setIsFormSubmitted(false)} className="btn btn-outline new-message-btn">Send Another Message</button>
                  </div>
                ) : (
                  <form action={contactData.formEndpoint} method="POST" className="premium-contact-form" onSubmit={handleContactSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="Your Email Focus" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;
