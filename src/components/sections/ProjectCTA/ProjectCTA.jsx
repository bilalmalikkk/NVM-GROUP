import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ProjectCTA.module.css';

export function ProjectCTA() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleContactClick = () => {
    // Scroll to contact section or handle navigation
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className={`${styles.projectCTASection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.projectCTAContainer}>
        <h2 className={styles.projectCTATitle}>{t.projectCTA.title}</h2>
        <p className={styles.projectCTADescription}>{t.projectCTA.description}</p>
        <button className={styles.projectCTAButton} onClick={handleContactClick}>
          {t.projectCTA.buttonText}
        </button>
      </div>
    </section>
  );
}

