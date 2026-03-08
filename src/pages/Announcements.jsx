import React from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { announcementData } from '../data/announcements';
import '../styles/Pages.css';
import '../styles/ExtraPages.css';

const Announcements = () => {
  const notices = announcementData;

  const getTypeColor = (type) => {
    switch (type) {
      case 'Important': return '#dc2626'; // Red
      case 'Event': return '#1d4ed8'; // Blue
      default: return 'var(--color-gold)';
    }
  };

  return (
    <div className="announcements-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Announcements</h1>
          <p className="page-subtitle text-white">Stay updated with the latest union notices.</p>
        </div>
      </header>

      <div className="container section">
        <div className="announcements-list">
          {notices.map(notice => (
            <div key={notice.id} className="announcement-card">
              <div className="announcement-icon" style={{ backgroundColor: getTypeColor(notice.type) }}>
                <FaBullhorn className="text-white" size={20} />
              </div>
              <div className="announcement-content">
                <div className="announcement-meta">
                  <span className="announcement-page-date">{notice.date}</span>
                  <span className="announcement-badge" style={{ color: getTypeColor(notice.type), borderColor: getTypeColor(notice.type) }}>{notice.type}</span>
                </div>
                <h3 className="announcement-title">{notice.title}</h3>
                <p className="announcement-desc">{notice.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
