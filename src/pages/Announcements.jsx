import React from 'react';
import { FaBullhorn } from 'react-icons/fa';
import '../styles/Pages.css';
import '../styles/ExtraPages.css';

const Announcements = () => {
  const notices = [
    { id: 1, date: 'Mar 15, 2026', title: 'Annual General Body Meeting', desc: 'All members are requested to attend the AGM at the main auditorium at 10 AM.', type: 'Important' },
    { id: 2, date: 'Mar 10, 2026', title: 'Sargam Arts Fest Registration', desc: 'Registrations for the upcoming arts festival are now open. Contact the Arts Secretary.', type: 'Event' },
    { id: 3, date: 'Feb 28, 2026', title: 'New Constitution Draft', desc: 'The updated constitution draft is available for review in the library notice board.', type: 'Notice' }
  ];

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
                  <span className="announcement-date">{notice.date}</span>
                  <span className="announcement-badge" style={{ color: getTypeColor(notice.type), borderColor: getTypeColor(notice.type) }}>{notice.type}</span>
                </div>
                <h3 className="announcement-title">{notice.title}</h3>
                <p className="announcement-desc" style={{ color: 'var(--color-dark)' }}>{notice.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
