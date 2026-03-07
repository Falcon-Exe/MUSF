import React from 'react';
import '../styles/Pages.css';
import '../styles/ExtraPages.css';

const PastLeadership = () => {
  const history = [
    { year: '2024-25', president: 'Abdullah K', secretary: 'Fayis Rahman' },
    { year: '2023-24', president: 'Rashid Ali', secretary: 'Thafseer M' },
    { year: '2022-23', president: 'Umer Farooq', secretary: 'Shibili K' },
    { year: '2021-22', president: 'Hisham P', secretary: 'Afnan V' }
  ];

  return (
    <div className="past-leadership-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Past Leadership</h1>
          <p className="page-subtitle text-white">Honoring the leaders who paved the way.</p>
        </div>
      </header>

      <div className="container section">
        <div className="content-block" style={{ maxWidth: '900px' }}>
          <table className="leadership-table">
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>President</th>
                <th>General Secretary</th>
              </tr>
            </thead>
            <tbody>
              {history.map((record, index) => (
                <tr key={index}>
                  <td><strong>{record.year}</strong></td>
                  <td>{record.president}</td>
                  <td>{record.secretary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastLeadership;
