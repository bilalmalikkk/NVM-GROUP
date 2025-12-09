import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './Hero.module.css';

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          {t.hero.tagline}
        </h1>
        <p className={styles.heroSubheading}>
          {t.hero.description}
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.btnPrimary}>{t.hero.button1}</button>
          <button className={styles.btnSecondary}>{t.hero.button2}</button>
        </div>
      </div>
    </section>
  );
}

