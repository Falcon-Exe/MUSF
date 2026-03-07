import React from 'react';
import MemberCard from '../components/MemberCard';
import SectionTitle from '../components/SectionTitle';
import '../styles/Pages.css';

const Leadership = () => {
  const currentLeaders = [
    { id: 1, name: 'Muhammed Haneef', role: 'President', department: 'Final Year Wafy', photo: null },
    { id: 2, name: 'Abdul Rahman', role: 'Vice President', department: 'Third Year Wafy', photo: null },
    { id: 3, name: 'Muhammed Sabir', role: 'General Secretary', department: 'Final Year Wafy', photo: null },
    { id: 4, name: 'Ahmad Shafi', role: 'Joint Secretary', department: 'Second Year Wafy', photo: null },
    { id: 5, name: 'Riyaz Ali', role: 'Treasurer', department: 'Final Year Wafy', photo: null },
    { id: 6, name: 'Haseeb K', role: 'Arts Secretary', department: 'Third Year Wafy', photo: null },
    { id: 7, name: 'Fasil Rahman', role: 'Sports Captain', department: 'Second Year Wafy', photo: null },
    { id: 8, name: 'Salman Faris', role: 'Magazine Editor', department: 'Final Year Wafy', photo: null },
  ];

  return (
    <div className="leadership-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Current Leadership</h1>
          <p className="page-subtitle text-white">Meet the dedicated team guiding MUSF this academic year.</p>
        </div>
      </header>

      <div className="container section">
        <SectionTitle title="Executive Committee 2025-26" subtitle="The faces behind the union's initiatives." />
        <div className="grid grid-4" style={{ marginTop: '3rem' }}>
          {currentLeaders.map(leader => (
            <MemberCard
              key={leader.id}
              name={leader.name}
              role={leader.role}
              department={leader.department}
              photo={leader.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
