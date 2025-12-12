import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import automotiveHeroImage from '../../../assets/4efe830d-2154-4ae6-83c6-94c53ab2f1c6.png';
import styles from './AutomotiveHero.module.css';

export function AutomotiveHero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroTitleSection}>
        <h1 className={styles.heroHeading}>
          {t.automotiveHero.heading}
        </h1>
      </div>
      <div 
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${automotiveHeroImage})` }}
      >
      </div>
    </section>
  );
}
