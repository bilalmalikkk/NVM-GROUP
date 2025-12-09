import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import styles from './About.module.css';

export function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutHeading}>{t.about.title}</h2>
          <p className={styles.aboutText}>
            {t.about.text}
          </p>
        </div>
        <div className={styles.aboutCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>{t.about.cardTitle}</span>
          </div>
          <div className={styles.cardPlaceholder}>
            {/* Placeholder for image */}
          </div>
        </div>
      </div>
    </section>
  );
}

