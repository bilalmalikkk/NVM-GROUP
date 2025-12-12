import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import automotiveImage from '../../../assets/0dba83_bcff88a14f564ba79dd1e7542b811f70~mv2.avif';
import styles from './AutomotiveContent.module.css';

export function AutomotiveContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.contentSection}>
      <div className={styles.contentContainer}>
        <div className={styles.contentText}>
          <h2 className={styles.contentHeading}>
            {t.automotiveContent.heading}
          </h2>
          {t.automotiveContent.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.contentParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.contentImage}>
          <img 
            src={automotiveImage} 
            alt={t.automotiveContent.imageAlt}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
