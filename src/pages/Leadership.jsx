import React from 'react';
import MemberCard from '../components/MemberCard';
import SectionTitle from '../components/SectionTitle';
import '../styles/Pages.css';
import { leadershipData } from '../data/leaders';

const Leadership = () => {

  return (
    <div className="leadership-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Sub Committees</h1>
          <p className="page-subtitle text-white">The dedicated teams driving MUSF initiatives.</p>
        </div>
      </header>

      <div className="container section">

        {/* Dynamic Sub-Committees Rendering */}
        {leadershipData.subCommittees && leadershipData.subCommittees.map((committee, index) => (
          <div key={index} className="leadership-category-section" style={{ marginBottom: '4rem' }}>
            <SectionTitle title={committee.title} subtitle={`Members of the ${committee.title} committee.`} />
            <div className="grid grid-4" style={{ marginTop: '3rem' }}>
              {committee.members.map(leader => (
                <MemberCard
                  key={leader.id}
                  name={leader.name}
                  role={leader.role}
                  department={leader.department}
                  photo={leader.image}
                />
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Leadership;
