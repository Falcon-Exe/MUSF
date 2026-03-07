import React from 'react';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';

const Gallery = () => {
  // Using high-quality unsplash placeholders for realistic preview
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1523580458119-389f4eb1ecb4?auto=format&fit=crop&q=80&w=800', alt: 'Students gathering' },
    { id: 2, url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800', alt: 'Library' },
    { id: 3, url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800', alt: 'Seminar' },
    { id: 4, url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800', alt: 'Arts festival' },
    { id: 5, url: 'https://images.unsplash.com/photo-1560523159-4a9692d222f9?auto=format&fit=crop&q=80&w=800', alt: 'Medical facility' },
    { id: 6, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', alt: 'Discussion' },
  ];

  return (
    <div className="gallery-page section-bg-offwhite min-h-screen">
      <header className="page-header pattern-bg section-bg-green text-white">
        <div className="container relative z-10">
          <h1 className="page-title text-white">Event Gallery</h1>
          <p className="page-subtitle text-white">Glimpses of our vibrant campus life.</p>
        </div>
      </header>

      <div className="container section">
        <div className="gallery-grid">
          {images.map(img => (
            <div key={img.id} className="gallery-item">
              <img src={img.url} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
