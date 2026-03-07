import React from 'react';
import '../styles/MemberCard.css';

const MemberCard = ({ photo, name, role, department }) => {
    return (
        <div className="member-card">
            <div className="member-photo">
                {photo ? (
                    <img src={photo} alt={name} loading="lazy" />
                ) : (
                    <div className="photo-placeholder"></div>
                )}
            </div>
            <div className="member-info">
                <h3 className="member-name">{name}</h3>
                <p className="member-role">{role}</p>
                <p className="member-department">{department}</p>
            </div>
        </div>
    );
};

export default MemberCard;
