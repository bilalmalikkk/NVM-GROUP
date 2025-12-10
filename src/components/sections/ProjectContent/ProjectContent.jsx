import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { getTranslations } from '../../../constants/translations';
import projectImage from '../../../assets/ceecf8af4d9886b1764d280616a7fcc4d2966f3a.avif';
import styles from './ProjectContent.module.css';

export function ProjectContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className={styles.projectContentSection}>
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
            src={projectImage} 
            alt={t.projectContent.imageAlt}
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  );
}

