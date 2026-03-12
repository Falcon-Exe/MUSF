import { FaInstagram } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useInstagramPosts } from '../hooks/useInstagramPosts';
import { galleryFallbackData, instagramURL } from '../data/gallery';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';
import '../styles/Home.css';

const Gallery = () => {
  useScrollReveal();
  const { instagramPosts, loading, error } = useInstagramPosts(18);

  const postsToDisplay = (instagramPosts && instagramPosts.length > 0) ? instagramPosts : galleryFallbackData;

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
          <div className="gallery-grid">
            {postsToDisplay.map((item, idx) => (
              <a
                href={item.link || instagramURL}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="gallery-item-card"
              >
                <div className="gallery-img-container">
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-missing');
                    }}
                  />
                  <div className="gallery-placeholder-text">
                    Post {idx + 1}
                  </div>
                </div>
                <div className="gallery-overlay">
                  <div className="insta-overlay-content">
                    <FaInstagram size={30} />
                    <span>@musf_puramannur</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;