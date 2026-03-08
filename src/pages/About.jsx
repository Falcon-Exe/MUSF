import React from 'react';
import SectionTitle from '../components/SectionTitle';
import {
  FaBook, FaPalette, FaHandsHelping, FaBullhorn, FaRunning, FaMosque,
  FaCalculator, FaUniversity, FaStore, FaLeaf
} from 'react-icons/fa';
import '../styles/Pages.css';
import '../styles/MemberCard.css'; // Reuse member card animations/shadows if needed

const About = () => {
  return (
    <div className="about-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">About MUSF</h1>
          <p className="page-subtitle text-white">Discover our history, vision, and the values that drive us.</p>
        </div>
      </header>

      <div className="container section">
        <div className="content-block">
          <h2>Our History</h2>
          <p>
            Majlis Umariyya Students Federation (MUSF) is the officially recognized and
            WSF certified students' union of Majlis Wafy College, Puramannur. Formed with
            the intention of fostering unity, academic excellence, and moral integrity among
            students, MUSF has been at the forefront of student welfare since its inception.
          </p>
          <p>
            Over the years, the federation has organized countless intellectual conclaves,
            academic seminars, arts festivals, and social initiatives, sculpting generations
            of students into capable leaders ready to face modern challenges.
          </p>
        </div>

        <div className="vision-mission-grid">
          <div className="vm-card pattern-bg light-pattern">
            <h3>Our Vision</h3>
            <p>
              Strengthen the upcoming generation with ideal youth and empower the Muslim society.
            </p>
          </div>
          <div className="vm-card pattern-bg light-pattern">
            <h3>Our Mission</h3>
            <p>
              Mould the students to face the fast-moving world by equipping them with the qualities
              of Critical Thinking, Public Speaking, Content Writing, and Problem Solving, and
              prepare the students to overcome the various challenges in the modern world.
            </p>
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Our Objectives</h2>
          <ul>
            <li>To provide a platform for students to develop their academic and intellectual potential.</li>
            <li>To foster a sense of unity, brotherhood, and cooperation among the student community.</li>
            <li>To uphold and promote moral, ethical, and spiritual values in all student activities.</li>
            <li>To encourage social responsibility and active participation in community service.</li>
            <li>To represent and advocate for the rights and welfare of students at Majlis Wafy College.</li>
          </ul>
        </div>

        <div className="departments-section" style={{ marginTop: '5rem' }}>
          <SectionTitle title="Our Departments" subtitle="The specialized wings that carry out MUSF's diverse missions." />

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            {[
              { title: 'Fine Arts Wing', icon: <FaPalette />, desc: 'Nurtures creative talents by organizing arts festivals, literary competitions, and cultural exhibitions.' },
              { title: 'Literary Wing', icon: <FaBook />, desc: 'Focuses on intellectual growth through seminars, workshops, and maintaining our campus library resources.' },
              { title: 'Research Wing', icon: <FaBullhorn />, desc: 'Promotes deep inquiry and intellectual exploration through specialized clubs and study circles.' },
              { title: 'Social Affairs Board', icon: <FaHandsHelping />, desc: 'Leads our community outreach, including charity drives, environmental initiatives, and CSS coordination.' },
              { title: 'Sports Wing', icon: <FaRunning />, desc: 'Promotes physical well-being and teamwork through annual athletic meets and inter-departmental tournaments.' },
              { title: 'PR & IT Department', icon: <FaBullhorn />, desc: 'Manages MUSF\'s public voice, digital presence, and content creation across various platforms.' },
              { title: 'Health Department', icon: <FaHandsHelping />, desc: 'Ensures the well-being of the student community through medical assistance and health awareness.' },
              { title: 'Library Board', icon: <FaBook />, desc: 'Oversees the management and enrichment of the college library resources for all students.' },
              { title: 'Saving Bank', icon: <FaUniversity />, desc: 'Facilitates internal financial management and encourages a culture of saving among the students.' },
              { title: 'Store Board', icon: <FaStore />, desc: 'Manages the campus store, ensuring essentials are available and accessible to the student community.' },
              { title: 'Garden Committee', icon: <FaLeaf />, desc: 'Dedicated to campus beautification, environmental sustainability, and maintaining our green spaces.' },
              { title: 'Language Hub', icon: <FaPalette />, desc: 'Fosters multilingual skills through specialized clubs in Arabic, English, Malayalam, and Urdu.' }

            ].map((dept, idx) => (
              <div key={idx} className="member-card" style={{ padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="member-photo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', background: 'var(--color-offwhite)', color: 'var(--color-green)', fontSize: '2.5rem', overflow: 'visible' }}>
                  {dept.icon}
                </div>
                <div className="member-info" style={{ padding: '0' }}>
                  <h3 className="member-name" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{dept.title}</h3>
                  <p className="member-department" style={{ lineHeight: '1.6', opacity: '0.9' }}>{dept.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;