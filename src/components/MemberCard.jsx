import React from 'react';
import '../styles/MemberCard.css';

const MemberCard = ({ photo, name, role, department }) => {
    const getInitialStyle = (name) => {
        const gradients = [
            'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
            'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
            'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
        ];
        // Ensure name exists before trying to split it
        let safeName = name ? name : "MUSF Leader";
        const index = safeName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;
        return { background: gradients[index] };
    };

    const getInitials = (name) => {
        if (!name) return "ML";
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div className="member-card">
            <div className="member-photo-container">
                {photo ? (
                    <img src={photo} alt={name} loading="lazy" className="member-photo-img" />
                ) : (
                    <div className="member-initials" style={getInitialStyle(name)}>
                        <span>{getInitials(name)}</span>
                    </div>
                )}
            </div>
            <div className="member-info">
                <h3 className="member-name">{name}</h3>
                <p className="member-role">{role}</p>
                {department && <p className="member-department">{department}</p>}
            </div>
        </div>
    );
};

export default MemberCard;
