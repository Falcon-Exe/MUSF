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
          <p className="page-subtitle text-white">The specialized wings driving MUSF's diverse missions.</p>
        </div>
      </header>

      <div className="container section">

        {/* Dynamic Departments Rendering */}
        {leadershipData.subCommittees && leadershipData.subCommittees.map((dept, index) => (
          <div key={index} className="leadership-category-section">
            <SectionTitle title={dept.title} icon={dept.icon} subtitle={`Members of the ${dept.title} department.`} />
            <div className="grid grid-4 leadership-section-grid">
              {dept.members.map(leader => (
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
