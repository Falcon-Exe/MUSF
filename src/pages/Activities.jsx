import React from 'react';
import { FaChalkboardTeacher, FaTheaterMasks, FaHandsHelping, FaBook } from 'react-icons/fa';
import '../styles/Pages.css';
import '../styles/ExtraPages.css';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Seminars & Workshops',
      icon: <FaChalkboardTeacher size={40} className="text-gold" />,
      desc: 'Regular intellectual conclaves and academic seminars with renowned resource persons to broaden students horizons.'
    },
    {
      id: 2,
      title: 'Arts Festivals',
      icon: <FaTheaterMasks size={40} className="text-gold" />,
      desc: 'Annual intra-college and inter-college arts fests to discover and nurture the creative talents of MUSF members.'
    },
    {
      id: 3,
      title: 'Social Initiatives',
      icon: <FaHandsHelping size={40} className="text-gold" />,
      desc: 'Charity drives, medical camps, and community outreach programs reflecting our commitment to societal welfare.'
    },
    {
      id: 4,
      title: 'Academic Programs',
      icon: <FaBook size={40} className="text-gold" />,
      desc: 'Language clubs, debating societies, and study circles aimed at improving critical thinking and public speaking.'
    }
  ];

  return (
    <div className="activities-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Our Activities</h1>
          <p className="page-subtitle text-white">Comprehensive programs for holistic development.</p>
        </div>
      </header>

      <div className="container section">
        <div className="grid grid-2" style={{ gap: '3rem' }}>
          {activities.map(act => (
            <div key={act.id} className="activity-card">
              <div className="activity-icon-wrapper">
                {act.icon}
              </div>
              <div className="activity-content">
                <h3 className="activity-title" style={{ color: 'var(--color-green)', fontSize: '1.5rem', marginBottom: '1rem' }}>{act.title}</h3>
                <p className="activity-desc" style={{ color: 'var(--color-dark)', lineHeight: '1.6' }}>{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
