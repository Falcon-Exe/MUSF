import React from 'react';

const SectionTitle = ({ title, subtitle, light, icon }) => {
    return (
        <div className={`section-title-wrapper ${light ? 'text-white' : ''}`}>
            <h2 className="section-title" style={light ? { color: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' } : { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                {icon && <span className="section-title-icon" style={{ fontSize: '0.9em', opacity: 0.9 }}>{icon}</span>}
                {title}
            </h2>
            {subtitle && <p className="section-subtitle" style={light ? { color: 'rgba(255,255,255,0.8)' } : {}}>{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;
