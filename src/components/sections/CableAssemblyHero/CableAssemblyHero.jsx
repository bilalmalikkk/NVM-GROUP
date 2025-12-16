import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import cableImage from '../../../assets/7a208073-eaec-41c0-beb6-41d7aa50b2e0.png';
import styles from './CableAssemblyHero.module.css';

export function CableAssemblyHero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            {t.cableAssemblyHero.heading}
          </h1>
          <p className={styles.heroDescription}>
            {t.cableAssemblyHero.description}
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.quoteButton} onClick={handleContactClick}>
              {t.cableAssemblyHero.quoteButton}
            </button>
            <button className={styles.contactButton} onClick={handleContactClick}>
              {t.cableAssemblyHero.contactButton}
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img 
            src={cableImage} 
            alt={t.cableAssemblyHero.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

