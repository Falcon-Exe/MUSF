import { Link } from 'react-router-dom';
import { FaUsers, FaBook, FaHandsHelping, FaMicrophone, FaUserGraduate, FaSitemap, FaCalendarCheck, FaMedal } from 'react-icons/fa';
import { leaders } from '../data/leaders';
import { useScrollReveal } from '../hooks/useScrollReveal';
import StatCounter from '../components/StatCounter';
import '../styles/Home.css';

const Home = () => {
  useScrollReveal();
  const stats = [
    { id: 1, icon: <FaUserGraduate size={32} />, label: "Active Students", num: 150, suffix: "+" },
    { id: 2, icon: <FaSitemap size={32} />, label: "Sub Committees", num: 10, suffix: "+" },
    { id: 3, icon: <FaCalendarCheck size={32} />, label: "Intellectual Conclaves", num: 4, suffix: "+" },
    { id: 4, icon: <FaMedal size={32} />, label: "Language Clubs", num: 3, suffix: "+" }
  ];

  const activities = [
    { title: "Academic Programs", icon: <FaBook size={24} />, desc: "Workshops, seminars, and study circles." },
    { title: "Arts & Cultural Festivals", icon: <FaMicrophone size={24} />, desc: "Annual cultural and artistic competitions." },
    { title: "Social Initiatives", icon: <FaHandsHelping size={24} />, desc: "Community outreach and volunteer programs." },
    { title: "Community Development", icon: <FaUsers size={24} />, desc: "Training for future community leaders." }
  ];

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
            <h2>About MUSF</h2>
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
          <div className="leadership-grid">
            {leaders.map(leader => (
              <div key={leader.id} className="leader-card">
                <div className="leader-photo-wrapper">
                  <img src={leader.image} alt={leader.name} loading="lazy" className="leader-photo" />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Activities Section */}
      <section className="activities section reveal-on-scroll">
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
      </section>

      {/* 6. Announcements Section */}
      <section className="announcements section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Latest Announcements</h2>
          <ul className="announcement-list">
            <li><span className="bullet">•</span> Arts Festival – March 20</li>
            <li><span className="bullet">•</span> General Body Meeting – April 2</li>
            <li><span className="bullet">•</span> Volunteer Program – April 10</li>
          </ul>
          <Link to="/announcements" className="view-all-link">View all announcements &rarr;</Link>
        </div>
      </section>

      {/* 7. Event Gallery */}
      <section className="gallery section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Event Gallery</h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <div key={item} className="gallery-item">
                <div className="gallery-img-placeholder">Gallery Image {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="cta section reveal-on-scroll">
        <div className="container cta-container">
          <h2>Join the Journey of Knowledge and Leadership</h2>
          <p>Become part of MUSF initiatives.</p>
          <Link to="/contact" className="btn btn-primary cta-btn">Contact Us</Link>
        </div>
      </section>

      {/* 10. Contact Section */}
      <section className="contact section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Majlis Umariyya Wafy College</h3>
              <p><strong>Email:</strong> musfpuramannur@gmail.com</p>
              <p><strong>Phone:</strong> +91 8943539446</p>
              <div className="map-placeholder">
                <a href="https://maps.app.goo.gl/Y2X7468AdqpwSnvK9" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form action="https://formspree.io/f/placeholder" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
