import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './PlasticMechanicsServices.module.css';

export function PlasticMechanicsServices() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const services = t.plasticMechanicsServices.services;
  
  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services];

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 24;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = currentScroll - cardWidth;
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 24;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = currentScroll + cardWidth;
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

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
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section ref={ref} className={`${styles.servicesSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h2 className={styles.servicesTitle}>{t.plasticMechanicsServices.title}</h2>
              <p className={styles.servicesDescription}>
                {t.plasticMechanicsServices.description}
              </p>
            </div>
          </div>
        </div>

        <div 
          className={styles.carouselWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={styles.carouselButton}
            onClick={handlePrev}
            aria-label="Previous services"
          >
            <ChevronLeft size={20} />
          </button>
          <div className={styles.carouselContainer} ref={scrollContainerRef}>
            <div className={styles.servicesGrid}>
              {duplicatedServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceImageWrapper}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.serviceImage}
                      loading="lazy"
                    />
                    <div className={styles.serviceOverlay}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.carouselButton}
            onClick={handleNext}
            aria-label="Next services"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

