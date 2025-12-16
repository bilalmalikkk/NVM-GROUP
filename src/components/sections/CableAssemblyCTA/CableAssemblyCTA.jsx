import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './CableAssemblyCTA.module.css';

export function CableAssemblyCTA() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const handleContactClick = () => {
    // Scroll to contact section or handle navigation
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>{t.cableAssemblyCTA.title}</h2>
        <p className={styles.ctaDescription}>{t.cableAssemblyCTA.description}</p>
        <button className={styles.ctaButton} onClick={handleContactClick}>
          {t.cableAssemblyCTA.buttonText}
        </button>
      </div>
    </section>
  );
}

