import React from 'react';
import '../styles/Pages.css';
import '../styles/Timeline.css';

const EventTimeline = () => {
  const events = [
    { year: '2025', title: 'Grand Arts Festival "Sargam"', desc: 'A multi-day cultural extravaganza showcasing student talents across 50+ events.' },
    { year: '2024', title: 'National Academic Seminar', desc: 'Hosted scholars from across the country to discuss contemporary Islamic jurisprudence.' },
    { year: '2023', title: 'Medical Relief Camp', desc: 'Organized a free medical camp benefiting over 500 local residents.' },
    { year: '2022', title: 'Language Club Inauguration', desc: 'Official launch of Arabic, English, and Urdu language enhancement committees.' },
    { year: '2021', title: 'MUSF Foundation Day', desc: 'The historic formation of Majlis Umariyya Students Federation.' }
  ];

  return (
    <div className="timeline-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Event Timeline</h1>
          <p className="page-subtitle text-white">A journey through our major milestones.</p>
        </div>
      </header>

      <div className="container section">
        <div className="timeline-container">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
