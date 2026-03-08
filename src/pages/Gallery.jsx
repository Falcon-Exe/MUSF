import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/Pages.css';
import '../styles/ContactGallery.css';
import '../styles/Home.css';

const Gallery = () => {
  useScrollReveal();
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback data
  const galleryData = [
    { id: 1, url: '/instagram/post1.jpg', alt: 'BUDGET BLUEPRINT' },
    { id: 2, url: '/instagram/post2.png', alt: 'cricket1' },
    { id: 3, url: '/instagram/post3.jpg', alt: 'ETHICS IN ECONOMICS' },
    { id: 4, url: '/instagram/post4.jpg', alt: 'ramadan mubark' },
    { id: 5, url: '/instagram/post5.jpg', alt: 'seminar cngrts' },
    { id: 6, url: '/instagram/post6.jpg', alt: 'Untitled-33' }
  ];

  const instagramURL = "https://www.instagram.com/musf_puramannur";

  // Try fetching real instagram posts
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // You must provide this in your .env file: VITE_INSTAGRAM_TOKEN=...
      const token = import.meta.env.VITE_INSTAGRAM_TOKEN;

      if (!token) {
        setLoading(false);
        return; // No token, fallback to mock data
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${token}`
        );
        const data = await response.json();

        if (data.data) {
          // Format raw API response to match our component structure
          const formattedPosts = data.data.slice(0, 18).map((post, i) => ({
            id: post.id,
            // Use thumbnail for video, media_url for image
            url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
            alt: post.caption ? post.caption.substring(0, 40) : `Instagram post ${i + 1}`,
            link: post.permalink
          }));
          setInstagramPosts(formattedPosts);
        } else {
          setError('Failed to load real posts.');
        }
      } catch (err) {
        console.error("Error fetching Instagram posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const postsToDisplay = instagramPosts.length > 0 ? instagramPosts : galleryData;

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