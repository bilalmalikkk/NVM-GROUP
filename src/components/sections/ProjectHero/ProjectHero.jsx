import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './ProjectHero.module.css';

export function ProjectHero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.projectHeroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          {t.projectHero.heading}
        </h1>
        <p className={styles.heroDescription}>
          {t.projectHero.description}
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.btnPrimary}>{t.projectHero.button1}</button>
          <button className={styles.btnSecondary}>{t.projectHero.button2}</button>
        </div>
      </div>
    </section>
  );
}

