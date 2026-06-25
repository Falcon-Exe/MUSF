import React from 'react';
import MemberCard from '../components/MemberCard';
import SectionTitle from '../components/SectionTitle';
import { FaUserTie } from 'react-icons/fa';
import '../styles/Pages.css';
import { leadershipData } from '../data/leaders';

const Leadership = () => {

  return (
    <div className="leadership-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Union Leadership</h1>
          <p className="page-subtitle text-white">The Executive Committee and Sub-Committees of MUSF.</p>
        </div>
      </header>

      <div className="container section">

        {/* Executive Committee Section */}
        <div className="leadership-category-section" style={{ marginBottom: '4rem' }}>
          <SectionTitle 
            title="Executive Committee" 
            icon={<FaUserTie />} 
            subtitle="The core administrative body steering MUSF initiatives." 
          />
          <div className="grid grid-4 leadership-section-grid">
            {leadershipData.executive && leadershipData.executive.map(leader => (
              <MemberCard
                key={leader.id}
                name={leader.name}
                role={leader.role}
                photo={leader.image}
              />
            ))}
          </div>
        </div>

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
