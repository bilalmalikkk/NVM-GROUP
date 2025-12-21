import React from 'react';
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

export function News() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className={`${styles.newsSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.newsHeader}>
        <h2 className={styles.newsTitle}>{t.news.title}</h2>
        <p className={styles.newsSubtitle}>
          {t.news.subtitle}
        </p>
      </div>
      <div className={styles.newsGrid}>
        {t.news.items.map((item, index) => {
          const imageSrc = item.imageKey ? newsImageMap[item.imageKey] : item.imageUrl;
          return (
            <article key={index} className={styles.newsCard}>
              {imageSrc && (
                <div className={styles.newsImageWrapper}>
                  <img
                    src={imageSrc}
                    alt={item.imageAlt || item.title}
                    className={styles.newsImage}
                  />
                </div>
              )}
              <div className={styles.newsContent}>
                {item.date && (
                  <time className={styles.newsDate}>{item.date}</time>
                )}
                <h3 className={styles.newsCardTitle}>{item.title}</h3>
                <p className={styles.newsDescription}>
                  {item.description}
                </p>
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
    </section>
  );
}

