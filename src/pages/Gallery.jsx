import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';
import '../styles/Home.css';

const Gallery = () => {
  useScrollReveal();
  const [iframePointerEvents, setIframePointerEvents] = useState('none');

  return (
    <div className="gallery-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Event Gallery</h1>
          <p className="page-subtitle text-white">Glimpses of our vibrant campus life.</p>
        </div>
      </header>

      <section className="gallery section reveal-on-scroll">
        <div className="container">
          <div 
            onClick={() => setIframePointerEvents('auto')}
            onMouseLeave={() => setIframePointerEvents('none')}
            style={{ position: 'relative', width: '100%', height: '800px' }}
          >
            {iframePointerEvents === 'none' && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                cursor: 'pointer',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.03)'
              }}>
                <span className="btn btn-outline" style={{ background: 'var(--color-white)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  Click to Interact with Feed
                </span>
              </div>
            )}
            <iframe 
              src="https://api-insta-ebon.vercel.app/?bg=transparent&padding=1rem" 
              width="100%" 
              height="800px" 
              style={{ border: "none", borderRadius: "12px", overflow: "hidden", pointerEvents: iframePointerEvents }} 
              title="Union Instagram Feed"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;