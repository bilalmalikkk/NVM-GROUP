import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './News.module.css';

// Import news images
import camX2Image from '../../../assets/Cam-X2.jpeg';
import partnersImage from '../../../assets/partners.avif';
import productionImage from '../../../assets/inline-pick-and-place-1200_1024x1024.webp';

// Map image keys to imported images
const newsImageMap = {
  'cam-x2': camX2Image,
  'partners': partnersImage,
  'production': productionImage,
};

// API base URL - use environment variable or fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD 
    ? 'https://nordic-medtek-cms-production.up.railway.app'
    : 'http://localhost:3001');

export function News() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch news from API with language filter and published status
        const apiLanguage = language === 'no' ? 'no' : 'en';
        let apiUrl = `${API_BASE_URL}/api/news?status=PUBLISHED&language=${apiLanguage}&limit=3&sort=date&order=DESC`;
        
        let response = await fetch(apiUrl);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error Response:', response.status, errorText);
          throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
        }

        let data = await response.json();
        
        // If no news found in current language, try without language filter
        if (!data.news || data.news.length === 0) {
          apiUrl = `${API_BASE_URL}/api/news?status=PUBLISHED&limit=3&sort=date&order=DESC`;
          response = await fetch(apiUrl);
          if (response.ok) {
            data = await response.json();
          }
        }
        
        setNewsItems(data.news || []);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
        // Fallback to empty array on error
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [language, API_BASE_URL]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    
    if (language === 'no') {
      // Norwegian date format: "23. desember 2025"
      const day = date.getDate();
      const year = date.getFullYear();
      const months = [
        'januar', 'februar', 'mars', 'april', 'mai', 'juni',
        'juli', 'august', 'september', 'oktober', 'november', 'desember'
      ];
      const month = months[date.getMonth()];
      return `${day}. ${month} ${year}`;
    } else {
      // English date format: "December 23, 2025"
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      return date.toLocaleDateString('en-US', options);
    }
  };

  // Get image source from news item
  const getImageSrc = (item) => {
    if (item.image_key && newsImageMap[item.image_key]) {
      return newsImageMap[item.image_key];
    }
    if (item.image_url) {
      // If it's a full URL, use it directly
      if (item.image_url.startsWith('http')) {
        return item.image_url;
      }
      // If it's a relative path, prepend API base URL
      return `${API_BASE_URL}${item.image_url.startsWith('/') ? '' : '/'}${item.image_url}`;
    }
    return null;
  };

  // Duplicate news items for seamless loop
  const duplicatedNewsItems = newsItems.length > 0 ? [...newsItems, ...newsItems] : [];

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector(`.${styles.newsCard}`);
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 32;
        const currentScroll = scrollContainerRef.current.scrollLeft;
        const newScroll = Math.max(0, currentScroll - (cardWidth + gap));
        scrollContainerRef.current.scrollTo({
          left: newScroll,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector(`.${styles.newsCard}`);
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 32;
        const currentScroll = scrollContainerRef.current.scrollLeft;
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        const newScroll = Math.min(maxScroll, currentScroll + (cardWidth + gap));
        scrollContainerRef.current.scrollTo({
          left: newScroll,
          behavior: 'smooth',
        });
      }
    }
  };

  // Rotating animation effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused || newsItems.length === 0) return;

    let animationId;
    let startTime = null;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;
        
        // Reset scroll position when reaching the end for seamless loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, newsItems.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section ref={ref} className={`${styles.newsSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.newsHeader}>
        <h2 className={styles.newsTitle}>{t.news.title}</h2>
        <p className={styles.newsSubtitle}>
          {t.news.subtitle}
        </p>
      </div>
      
      {loading && (
        <div className={styles.newsLoading}>
          <p>Loading news...</p>
        </div>
      )}

      {error && !loading && (
        <div className={styles.newsError}>
          <p>Unable to load news. Please try again later.</p>
        </div>
      )}

      {!loading && !error && newsItems.length === 0 && (
        <div className={styles.newsEmpty}>
          <p>No news available at the moment.</p>
        </div>
      )}

      {!loading && !error && newsItems.length > 0 && (
        <div 
          className={styles.carouselWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={styles.carouselButton}
            onClick={handlePrev}
            aria-label="Previous news"
          >
            <ChevronLeft size={20} />
          </button>
          <div className={styles.carouselContainer} ref={scrollContainerRef}>
            <div className={styles.newsGrid}>
              {duplicatedNewsItems.map((item, index) => {
                const imageSrc = getImageSrc(item);
                return (
                  <article key={`${item.id}-${index}`} className={styles.newsCard}>
                    {imageSrc && (
                      <div className={styles.newsImageWrapper}>
                        <img
                          src={imageSrc}
                          alt={item.image_key || item.title}
                          className={styles.newsImage}
                        />
                      </div>
                    )}
                    <div className={styles.newsContent}>
                      {item.date && (
                        <time className={styles.newsDate}>{formatDate(item.date)}</time>
                      )}
                      <h3 className={styles.newsCardTitle}>{item.title}</h3>
                      {item.description && item.description.trim() && (
                        <div 
                          className={styles.newsDescription}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}
                      {item.content && item.content.trim() && (
                        <div 
                          className={styles.newsContentBody}
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      )}
                      {(!item.description || !item.description.trim()) && (!item.content || !item.content.trim()) && (
                        <p className={styles.newsDescription} style={{ fontStyle: 'italic', color: '#999' }}>
                          No description or content available.
                        </p>
                      )}
                      {item.link && (
                        <a href={item.link} className={styles.newsLink}>
                          {t.news.readMore}
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <button
            className={styles.carouselButton}
            onClick={handleNext}
            aria-label="Next news"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}

