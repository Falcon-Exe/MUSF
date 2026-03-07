import React from 'react';

const SectionTitle = ({ title, subtitle, light }) => {
    return (
        <div className={`section-title-wrapper ${light ? 'text-white' : ''}`}>
            <h2 className="section-title" style={light ? { color: 'var(--color-white)' } : {}}>{title}</h2>
            {subtitle && <p className="section-subtitle" style={light ? { color: 'rgba(255,255,255,0.8)' } : {}}>{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;
