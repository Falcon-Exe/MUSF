import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';
import '../styles/Home.css';

const Gallery = () => {
  useScrollReveal();


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
          <iframe 
            src="https://api-insta-ebon.vercel.app/?bg=0f172a&padding=1rem" 
            width="100%" 
            height="800px" 
            style={{ border: "none", borderRadius: "12px", overflow: "hidden" }} 
            title="Union Instagram Feed"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;