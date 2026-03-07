import React from 'react';
import '../styles/Pages.css';

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
      </div>
    </div>
  );
};

export default About;
