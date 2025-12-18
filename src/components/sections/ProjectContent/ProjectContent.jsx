import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ProjectContent.module.css';

export function ProjectContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className={`${styles.projectContentSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.projectContentContainer}>
        <div className={styles.projectContentText}>
          <h2 className={styles.projectContentHeading}>
            {t.projectContent.heading}
          </h2>
          <p className={styles.projectContentDescription}>
            {t.projectContent.description}
          </p>
        </div>
        <div className={styles.projectContentImage}>
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80"
            alt={t.projectContent.imageAlt}
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  );
}

